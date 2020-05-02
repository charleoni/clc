import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosModalPage } from './pos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosModalPageRoutingModule {}
