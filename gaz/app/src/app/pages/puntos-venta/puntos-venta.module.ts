import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntosVentaPage } from './puntos-venta.page';

import { ModalPuntoVentaPage } from '../modal-punto-venta/modal-punto-venta.page';
import { ModalPuntoVentaPageModule } from '../modal-punto-venta/modal-punto-venta.module';

const routes: Routes = [
  {
    path: '',
    component: PuntosVentaPage
  }
];

@NgModule({
  entryComponents: [
    ModalPuntoVentaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalPuntoVentaPageModule
  ],
  declarations: [PuntosVentaPage]
})
export class PuntosVentaPageModule {}
