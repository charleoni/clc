import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosVisitListPage } from './pos-visit-list.page';

const routes: Routes = [
  {
    path: '',
    component: PosVisitListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosVisitListPageRoutingModule {}
