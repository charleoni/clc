import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosVisitListPageRoutingModule } from './pos-visit-list-routing.module';

import { PosVisitListPage } from './pos-visit-list.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PosVisitListPageRoutingModule,
        ComponentsModule
    ],
  declarations: [PosVisitListPage]
})
export class PosVisitListPageModule {}
