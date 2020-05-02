import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Message } from '../models/message.model';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public config: Message;
    constructor(private toastCtrl: ToastController) {}

    async display() {
        const alert = await this.toastCtrl.create({
            color: 'fucsia',
            header: 'Datos incorrectos',
            message: 'Los datos de acceso están incorrectos',
            duration: 2500
        });
        await alert.present();
    }
}