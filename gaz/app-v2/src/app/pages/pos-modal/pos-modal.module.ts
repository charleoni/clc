import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosModalPageRoutingModule } from './pos-modal-routing.module';

import { PosModalPage } from './pos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosModalPageRoutingModule
  ],
  declarations: [PosModalPage]
})
export class PosModalPageModule {}
