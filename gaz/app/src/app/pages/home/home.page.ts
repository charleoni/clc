import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  user: any = '';
  currentDate: Date;

  constructor(private storage: StorageService,
              private menuCtrl: MenuController) {}

  async ngOnInit() {
    this.user = await this.storage.getData('user');
    this.currentDate = new Date();
  }

  ngOnDestroy() {}

  async toggleMenu() {
    await this.menuCtrl.toggle();
  }
}
