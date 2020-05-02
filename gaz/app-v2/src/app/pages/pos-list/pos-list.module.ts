import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosListPageRoutingModule } from './pos-list-routing.module';

import { PosListPage } from './pos-list.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PosListPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PosListPage]
})
export class PosListPageModule {}
