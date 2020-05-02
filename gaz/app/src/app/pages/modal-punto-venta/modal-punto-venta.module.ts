import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPuntoVentaPage } from './modal-punto-venta.page';
import { ChartsModule } from "ng2-charts";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChartsModule,
    ],
  declarations: [ModalPuntoVentaPage]
})
export class ModalPuntoVentaPageModule {}
