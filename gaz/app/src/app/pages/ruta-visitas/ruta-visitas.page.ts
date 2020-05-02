import { Component, OnInit } from '@angular/core';
import { VisitListModel } from '../../models/visit-list.model';
import { QueriesService } from '../../services/queries/queries.service';
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-ruta-visitas',
  templateUrl: './ruta-visitas.page.html',
  styleUrls: ['./ruta-visitas.page.scss'],
})
export class RutaVisitasPage implements OnInit {

  list: VisitListModel[];

  constructor(private queriesService: QueriesService,
              private storageService: StorageService) { }

  async ngOnInit() {
    const { idSupervisor } = await this.storageService.getData('user');
    const params = {
      query: 'supervisor_visits',
      params: { idSupervisor }
    };

    this.queriesService.query(params).subscribe((list: VisitListModel[]) => {
      this.list = list;
    });
  }

  isDisabled(item: VisitListModel):boolean {
    return (item.authorization === 1) ? false : !this.isNearby();
  }

  // TODO: Imlementar Geolocalización para calcular distancia del punto de venta
  isNearby() {
    return false
  }

}
