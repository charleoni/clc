import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesChartsPageRoutingModule } from './sales-charts-routing.module';

import { SalesChartsPage } from './sales-charts.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SalesChartsPageRoutingModule,
        ComponentsModule
    ],
  declarations: [SalesChartsPage]
})
export class SalesChartsPageModule {}
