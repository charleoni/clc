import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import {Observable, from, throwError} from 'rxjs';
import {switchMap, map, catchError, tap} from 'rxjs/operators';
import { StorageService } from '../services/storage/storage.service';
import { LoadingController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  loading;
  constructor(private storage: StorageService,
              private toastCtrl: ToastController,
              private router: Router,
              private loadingCtrl: LoadingController) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return from(this.storage.getData('token')).pipe(
          tap(async () => {
            this.showLoading();
          }),
          switchMap(token => {
            if (token) {
              request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
              });
            }

            if (!request.headers.has('Content-Type')) {
              request = request.clone({
                headers: request.headers.set('Content-Type', 'application/json')
              });
            }

            return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                    token = event.headers.get('authorization');
                    if (token) {
                      this.storage.setData('token', token);
                    }
                  }
                  return event;
                }),
                catchError((error: HttpErrorResponse) => {
                  const status =  error.status;
                  const message = (status !== 0) ? error.error : {
                    title: 'Error de conexión',
                    description: 'La aplicación no tiene conexión con el servidor'
                  };
                  this.showMessage(status, message);
                  return throwError(error);
                })
            );
          }),
          tap( async () => {
            if (this.loading) {
              setTimeout(() => {
                this.loading.dismiss();
              }, 500);
            }
          })
      );
  }

  async showMessage(status, message) {
    const alert = await this.toastCtrl.create({
      color: 'fucsia',
      header: message.title,
      message: message.description,
      duration: 2500
    });

    if(status === 401 || status === 403){
      await this.storage.destroyData('token');
      await this.storage.destroyData('user');
      await this.router.navigate(['/login'], { replaceUrl: true });
    }
    await alert.present();
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Procesando...',
      duration: 1000
    });
    await this.loading.present();
  }
}
