import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StorageService } from '../../services/storage.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
      private menuCtrl: MenuController,
      private storage: StorageService
  ) { }

  user: User;
  date: Date;

  async ngOnInit() {
    this.user = await this.storage.read('user');
    this.date = new Date();
  }

  async toggleMenu() {
    await this.menuCtrl.toggle();
  }

}
