import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-options',
  templateUrl: './popover-options.component.html',
  styleUrls: ['./popover-options.component.scss'],
})
export class PopoverOptionsComponent implements OnInit {

  @Input() type: string;
  @Input() billing: string;

  constructor(
      private popover: PopoverController
  ) {}

  ngOnInit() {}

  async onSelect(action: string, type: string) {
    await this.popover.dismiss({ action, type });
  }
}
