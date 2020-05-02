import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../../services/storage/storage.service';
import { ProspectModel } from '../../models/prospect.model';
import { CapacityModel } from '../../models/capacity.model';
import { ProspectsService } from '../../services/prospects/prospects.service';

@Component({
  selector: 'app-prospectos',
  templateUrl: './prospectos.page.html',
  styleUrls: ['./prospectos.page.scss'],
})
export class ProspectosPage implements OnInit {

  citiesData: [] = [];
  cities: any = [];
  department;
  prospect: ProspectModel;
  capacity: CapacityModel;

  constructor(private storage: StorageService,
              private prospectService: ProspectsService,
              private toastCtrl: ToastController) {
    this.capacity = new CapacityModel();
    this.prospect = new ProspectModel();
    Object.assign(this.prospect, { installedCapacity: [] });
  }

  async ngOnInit() {
    this.citiesData = await this.storage.getData('cities');
  }

  getDepartments() {
    return this.citiesData.filter((item: any) => item.type === 'D');
  }

  setCities() {
    this.prospect.idCity = '';
    this.cities = (!this.department) ? [] :
    this.citiesData.filter((item: any) => item.type === 'M' && +item.id_city === +this.department);
  }

  addCapacity(cForm: NgForm) {
    if (cForm.valid) {
      this.prospect.installedCapacity.push(cForm.value);
      cForm.reset();
    }
  }

  removeCapacity(index: number) {
    this.prospect.installedCapacity.splice(index, 1);
  }

  async addProspect(pForm: NgForm) {
    if (pForm.valid) {
      Object.assign(this.prospect, { ...pForm.value });
      this.prospectService.create(this.prospect).subscribe((data: any) => {
        const message = `Prospecto creado con éxito, registro número: ${ data.id }`;
        pForm.reset();
        Object.assign(this.prospect, { installedCapacity: [] });
        this.showToast(message);
      });
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({ color: 'fucsia', message, duration: 2500 });
    await toast.present();
  }
}
