import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalePricesPageRoutingModule } from './sale-prices-routing.module';

import { SalePricesPage } from './sale-prices.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SalePricesPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SalePricesPage]
})
export class SalePricesPageModule {}
