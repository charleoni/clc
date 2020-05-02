import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage/storage.service';
import { ModalPuntoVentaPage } from '../modal-punto-venta/modal-punto-venta.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-puntos-venta',
  templateUrl: './puntos-venta.page.html',
  styleUrls: ['./puntos-venta.page.scss']
})
export class PuntosVentaPage implements OnInit {
  pos: any;
  filterName: string = '';
  constructor(private storage: StorageService,
              private modalCtrl: ModalController) {}

  async ngOnInit() {
    this.pos = await this.storage.getData('pos');
  }

  filterData(pos) {
    if(!this.filterName) {
      return pos
    } else {
      return pos.name.toLowerCase().includes(this.filterName.toLowerCase()) || pos.establishment.toLowerCase().includes(this.filterName.toLowerCase())
    }
  }

  async showModalPOS(pos) {
    const modal = await this.modalCtrl.create({
      component: ModalPuntoVentaPage,
      componentProps: {
        filter: {
          code: pos.code,
          branch_office: pos.branch_office
        }
      }
    });
    await modal.present();
  }
}
