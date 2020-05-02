import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosVisitPage } from './pos-visit.page';

const routes: Routes = [
  {
    path: '',
    component: PosVisitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosVisitPageRoutingModule {}
