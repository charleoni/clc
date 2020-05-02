import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { StorageService } from './storage.service';
import { AuthService} from './auth.service';
import { ToastController } from '@ionic/angular';
import {from, Observable, throwError} from 'rxjs';
import { catchError, map, share, switchMap} from 'rxjs/operators';
import { Message} from '../models/message.model';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    private message: Message;

    constructor(private storage: StorageService,
                private auth: AuthService,
                private toastCtrl: ToastController) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.storage.read('token')).pipe(
            switchMap(token => {
                if (token) {
                    req = req.clone({
                        setHeaders: { Authorization: `Bearer ${token}`}
                    });
                }
                return next.handle(req).pipe(
                    share(),
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            const token = event.headers.get('authorization');
                            if (token) {
                                this.storage.save('token', token);
                            }
                            // this.actionSuccess(event);
                        }
                        return event;
                    }),
                    catchError((error: HttpErrorResponse) => {
                        // this.actionError(error);
                        return throwError(error);
                    }),
                );
            })
        );
    }

    private async actionError(response) {
        const { status, error } = response;
        if ([0].includes(status)) {
            this.message = new Message('Error de conexión', 'No existe conexión con el servidor', 'error');
        } else if ([400, 401, 403, 404, 422, 409].includes(status)) {
            this.message = new Message(error.title, error.description, error.type);
            if ([401, 403].includes(status)) {
                await this.auth.logout();
            }
        } else {
            this.message = new Message('Error', 'Se ha presentado un error en el sistema', 'error');
        }
        await this.displayMessage();
    }

    private async actionSuccess(event) {
        const { url, body: { created, updated, deleted } } = event;
        let description = 'Registro procesado con éxito';
        if (created || updated || deleted) {
            if (created) {
                description = 'Registro creado con éxito';
            } else if (updated) {
                description = 'Registro actualizado con éxito';
            } else if (deleted) {
                description = 'Registro eliminado con éxito';
            }
            this.message = new Message('Proceso exitoso', description, 'success');
            await this.displayMessage();
        }
        if (url.includes('users/login')) {
            this.message = new Message('Ingreso de usuarios', 'Acceso correcto al sistema', 'success');
            await this.displayMessage();
        }
    }

    private async displayMessage() {
        const toast = await this.toastCtrl.create({
            color: 'fucsia',
            header: this.message.title,
            message: this.message.description,
            duration: 2500
        });
        await toast.present();
    }
}