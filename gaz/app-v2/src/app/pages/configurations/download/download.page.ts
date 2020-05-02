import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../../services/pages/query.service';
import { PosVisitService } from '../../../services/pages/pos-visit.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'],
})
export class DownloadPage implements OnInit {

  constructor(
      private query: QueryService,
      private visits: PosVisitService,
      private storage: StorageService,
  ) { }

  loaded = {
    cities: false,
    pos: false,
    posVisit: false,
    posInventories: false,
  };

  lastUpdate: Date;

  async ngOnInit() {
    this.lastUpdate = await this.storage.read('_lastUpdate');
  }

  async download() {

    const { profileCode, supervisorId } = await this.storage.read('user');

    // Configuración de ciudades
    this.query.getCities().subscribe(cities => {
      this.storage.save('_cities', cities);
      this.loaded.cities = true;
    });

    // Configuración de puntos de venta
    this.query.getPos(profileCode, supervisorId).subscribe(pos => {
      this.storage.save('_pos', pos);
      this.loaded.pos = true;
    });

    // Configuración de inventarios de puntos de venta
    this.query.query({ query: "pos_inventories", params: { supervisorId } }).subscribe(inventories => {
      this.storage.save('_inventories', inventories);
      this.loaded.posInventories = true;
    });

    // Configuración de Visitas a Puntos de venta
    // await this.storage.destroy('_visits');
    this.storage.read('_visits')
        .then( visitsLocal => {
          this.visits.getVisits().subscribe(visitsServer => {
            let visitList = [];
            if(visitsLocal && visitsLocal.length) {
              const pending = visitsLocal.filter(local => !local.isFinished);
              const visitsNew =  visitsServer.filter( visit => !Boolean(pending.find(local => local.id === visit.id )));
              visitList = visitsLocal.concat(visitsNew);
            } else {
              visitList = visitsServer;
            }
            this.storage.save('_visits', visitList).then(() => {
              this.loaded.posVisit = true;
            });
          });
        });

    const lastUpdate = new Date();
    this.storage.save('_lastUpdate', lastUpdate).then(() => this.lastUpdate = lastUpdate);
  }

  isChecked(item) {
    return (this.loaded[item]) ? 'radio-button-on' : 'radio-button-off';
  }

}
