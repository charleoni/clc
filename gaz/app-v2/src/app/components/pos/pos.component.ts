import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverOptionsComponent } from '../popover-options/popover-options.component';
import { Pos } from '../../models/pos.model';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
})
export class PosComponent implements OnInit {

  @Input() pos: Pos;
  @Input() type: string;
  @Input() billing: string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(
      private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  async displayPopover(event){
    const popover = await this.popoverCtrl.create({
      component: PopoverOptionsComponent,
      componentProps: {
        type: this.type,
        billing: this.billing
      },
      mode: 'ios',
      event,
    });
    await popover.present();
    const { data } = await popover.onWillDismiss();
    if(data && data.action){
      const { action, type } = data;
      this.action(action, type);
    }
  }

  action(action: string, type: string): void {
    const { id, code, branch_code } = this.pos;
    this.onSelect.emit({ id, code, branch_code, type, action });
  }

}
