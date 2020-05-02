import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountsReceivablePageRoutingModule } from './accounts-receivable-routing.module';

import { AccountsReceivablePage } from './accounts-receivable.page';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AccountsReceivablePageRoutingModule,
        ComponentsModule
    ],
  declarations: [AccountsReceivablePage]
})
export class AccountsReceivablePageModule {}
