import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { MenusService } from '../../services/menus/menus.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options: any;

  constructor(private router: Router,
              private menusService: MenusService,
              private menuCtrl: MenuController,
              private alertCtrl: AlertController,
              private storage: StorageService) { }

  ngOnInit() {
    this.options = this.menusService.getNavBarMenu();
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
            await this.storage.destroyData('token');
            await this.storage.destroyData('user');
            await this.menuCtrl.toggle();
            await this.router.navigate(['/login'], { replaceUrl: true });
          }
        }
      ]
    });
    await alert.present();
  }

}
