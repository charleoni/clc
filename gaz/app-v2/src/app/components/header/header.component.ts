import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() display: boolean = true;
  @Input() hasBackground: boolean = false;

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {}

  async toggleMenu(): Promise<void> {
    await this.menuCtrl.toggle();
  }

}
