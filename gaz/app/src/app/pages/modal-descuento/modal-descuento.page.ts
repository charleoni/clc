import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-descuento',
  templateUrl: './modal-descuento.page.html',
  styleUrls: ['./modal-descuento.page.scss'],
})
export class ModalDescuentoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

}
