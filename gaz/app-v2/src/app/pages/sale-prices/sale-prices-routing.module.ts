import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalePricesPage } from './sale-prices.page';

const routes: Routes = [
  {
    path: '',
    component: SalePricesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalePricesPageRoutingModule {}
