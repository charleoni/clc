import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitaPage } from './visita.page';
import { ModalDescuentoPage } from '../modal-descuento/modal-descuento.page';
import { ModalDescuentoPageModule } from '../modal-descuento/modal-descuento.module';
import { ModalPuntoVentaPage } from '../modal-punto-venta/modal-punto-venta.page';
import { ModalPuntoVentaPageModule } from '../modal-punto-venta/modal-punto-venta.module';

import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

const routes: Routes = [
  {
    path: '',
    component: VisitaPage
  }
];

@NgModule({
  entryComponents: [
    ModalDescuentoPage,
    ModalPuntoVentaPage
  ],
  declarations: [VisitaPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalDescuentoPageModule,
    ModalPuntoVentaPageModule
  ],
  providers: [
    Camera,
    FileTransfer
  ]
})
export class VisitaPageModule {
}
