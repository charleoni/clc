import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MisVentasPage } from './mis-ventas.page';

import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: MisVentasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [MisVentasPage]
})
export class MisVentasPageModule {}
