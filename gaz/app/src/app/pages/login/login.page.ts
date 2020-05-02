import {Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, MenuController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  user = {
    username: 'jcastrillon',
    password: '12345678'
  };

  constructor(private platform: Platform,
              private alertCtrl: AlertController,
              private authService: AuthService,
              private storage: StorageService,
              private router: Router,
              private toastCtrl: ToastController,
              private menuCtrl: MenuController) {}

  async ngOnInit() {
    await this.menuCtrl.enable(false);
  }

  async ngOnDestroy() {
    await this.menuCtrl.enable(true);
  }

  closeApp() {
    this.platform.ready().then(async () => {
      const alert = await this.alertCtrl.create({
        header: '¿Desea salir de la aplicación?',
        buttons: [
          {
            text: 'No',
            role: 'cancel'
          },
          {
            text: 'Si',
            handler: () => {
              navigator['app'].exitApp();
            }
          }
        ]
      });
      await alert.present();
    });
  }

  async login(fLogin: NgForm) {
    if (fLogin.valid) {
      this.authService.login(this.user).subscribe( response  => {
        this.storage.setData('user', response.body);
        this.router.navigate(['/home'], { replaceUrl: true });
      });
    } else {
      await this.showMessage();
    }
  }

  async showMessage() {
    const alert = await this.toastCtrl.create({
      color: 'fucsia',
      header: 'Datos incorrectos',
      message: 'Los datos de acceso están incorrectos',
      duration: 2500
    });
    await alert.present();
  }

}
