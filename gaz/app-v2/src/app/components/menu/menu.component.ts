import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { NavbarService } from '../../services/navbar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options: any;

  constructor(
      private navbar: NavbarService,
      private auth: AuthService,
      private menuCtrl: MenuController,
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.options = this.navbar.getNavbarMenu();
  }

  async closeSession() {
    const alert = await this.alertCtrl.create({
      header: '¿Desea cerrar la sesión?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Si',
          handler: async () => {
            await this.menuCtrl.toggle();
            await this.auth.logout();
          }
        }
      ]
    });
    await alert.present();
  }

}
