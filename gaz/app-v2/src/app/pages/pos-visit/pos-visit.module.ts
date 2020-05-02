import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

import { PosVisitPageRoutingModule } from './pos-visit-routing.module';

import { PosVisitPage } from './pos-visit.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PosVisitPageRoutingModule,
        ComponentsModule
    ],
    declarations: [PosVisitPage],
    providers: [Camera],
})
export class PosVisitPageModule {}
