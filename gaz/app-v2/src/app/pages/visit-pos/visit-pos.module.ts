import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitPosPageRoutingModule } from './visit-pos-routing.module';

import { VisitPosPage } from './visit-pos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitPosPageRoutingModule
  ],
  declarations: [VisitPosPage]
})
export class VisitPosPageModule {}
