import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosListPage } from './pos-list.page';

const routes: Routes = [
  {
    path: '',
    component: PosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosListPageRoutingModule {}
