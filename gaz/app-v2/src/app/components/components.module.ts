import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { PopoverOptionsComponent } from './popover-options/popover-options.component';

@NgModule({
    entryComponents:[
        PopoverOptionsComponent
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        PosComponent,
        PopoverOptionsComponent
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        PosComponent,
        PopoverOptionsComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ]

})
export class ComponentsModule {}