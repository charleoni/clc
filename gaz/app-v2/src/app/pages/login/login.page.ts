import {Component, OnInit, OnDestroy} from '@angular/core';
import { Platform, ToastController, AlertController, MenuController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  user: Login;

  constructor(
      private platform: Platform,
      private router: Router,
      private auth: AuthService,
      private storage: StorageService,
      private toastCtrl: ToastController,
      private alertCtrl: AlertController,
      private menuCtrl: MenuController,
  ) {}

  async ngOnInit() {
    this.user = new Login('jcastrillon', '12345678');
    await this.menuCtrl.enable(false);
  }

  async ngOnDestroy() {
    await this.menuCtrl.enable(true);
  }

  async login(fLogin: NgForm) {
    if (fLogin.valid) {
      this.auth.login(this.user).subscribe( user  => {
        this.storage.save('user', user);
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

}
