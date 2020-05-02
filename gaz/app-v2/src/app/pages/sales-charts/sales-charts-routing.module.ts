import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesChartsPage } from './sales-charts.page';

const routes: Routes = [
  {
    path: '',
    component: SalesChartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesChartsPageRoutingModule {}
