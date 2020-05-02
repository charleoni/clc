import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataService } from '../../services/local-data.service';
import { Pos } from '../../models/pos.model';

@Component({
  selector: 'app-pos-visit-list',
  templateUrl: './pos-visit-list.page.html',
  styleUrls: ['./pos-visit-list.page.scss'],
})
export class PosVisitListPage implements OnInit {

  constructor(
      private local: LocalDataService,
      private router: Router,
  ) { }

  pos: Pos[];

  async ngOnInit() {
    await this.getVisits().then(pos => {
      this.pos = pos;
    });
  }

  async getVisits() {
    const posList = [];
    const visits = await this.local.getAll('_visits').then(async visits => {
      return await visits.map(visit => {
        const {id, date, code, branch_code} = visit;
        return { id, date, code, branch_code }
      });
    });
    visits.sort(this.local.orderField('date'));
    await visits.map( async item => {
      const pos = await this.local.getPos(item.code, item.branch_code);
      await Object.assign(pos, { id: item.id, date: item.date });
      await Object.assign(item, { pos });
      await posList.push(pos);
      return await item;
    });
    return posList;
  }

  async onSelect(selected) {
    const { id, code, branch_code, action } = selected;
    if(action === 'create'){
      await this.router.navigate([`/pos-visit/${id}/${code}/${branch_code}`], { replaceUrl: true });
    }
  }

}
