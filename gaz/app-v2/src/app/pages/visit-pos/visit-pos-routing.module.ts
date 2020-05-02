import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitPosPage } from './visit-pos.page';

const routes: Routes = [
  {
    path: '',
    component: VisitPosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitPosPageRoutingModule {}
