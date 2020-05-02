import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProspectsPageRoutingModule } from './prospects-routing.module';

import { ProspectsPage } from './prospects.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProspectsPageRoutingModule,
        ComponentsModule
    ],
  declarations: [ProspectsPage]
})
export class ProspectsPageModule {}
