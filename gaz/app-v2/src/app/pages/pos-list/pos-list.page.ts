import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Pos } from '../../models/pos.model';
import { LoadingController } from '@ionic/angular';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-pos-list',
  templateUrl: './pos-list.page.html',
  styleUrls: ['./pos-list.page.scss'],
})
export class PosListPage implements OnInit, OnDestroy {

  pos: Pos[];
  loading;

  constructor(
      private storage: StorageService,
      private local: LocalDataService,
      private loadingCtrl: LoadingController,
  ) { }

  async ngOnInit() {

    this.loading = await this.loadingCtrl.create({
      message: 'Procesando...',
      duration: 500,
    });

    await this.loading.present();

    this.local.getAll('_pos').then( pos => {
      this.pos = pos;
      this.loading.dismiss();
    });
  }

  async ngAfterViewInit(){
  }

  ngOnDestroy() {
    this.pos = [];
  }

  onSelect(selected) {
    console.log(selected);
  }


}
