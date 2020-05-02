import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonSlides, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Prospect, Capacity } from '../../models/prospect.model';
import { City } from '../../models/city.model';
import id from 'nanoid';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.page.html',
  styleUrls: ['./prospects.page.scss'],
})
export class ProspectsPage implements OnInit {

  @ViewChild(IonContent, { static: true }) content: IonContent;
  @ViewChild('slider', { static: true }) slides: IonSlides;
  prospect: Prospect;
  capacity: Capacity;

  citiesData: City[];
  departments: City[];
  cities: City[];
  prospects: Prospect[];

  user: User;

  constructor(
      private storage: StorageService,
      private toastCtrl: ToastController,
      private router: Router,
  ) { }

  async ngOnInit() {
    this.prospect = new Prospect(id(12), '', '', '', '', '', '', {}, '', null, [], '','', '', null);
    this.capacity = new Capacity('', null, null);
    this.citiesData = await this.storage.read('_cities');
    this.departments = this.citiesData.filter(city => city.type === 'D');
    this.prospects = await this.storage.read('_prospects') || [];
    this.user = await this.storage.read('user');
  }

  onDepartmentChange() {
    this.prospect.cityId = '';
    this.cities = this.citiesData.filter(city => city.type === 'M' && city.city_id == this.prospect.departmentId) || [];
  }

  async goToSlide(i: number) {
    await this.slides.slideTo(i);
    setTimeout(() => {
      this.content.scrollToTop(1200);
    },400)
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
      Object.assign(this.prospect, {
        userId: this.user.id,
        createdAt: new Date()
      });
      this.prospects.push(this.prospect);
      await this.storage.save('_prospects', this.prospects).then( async () => {
        pForm.reset();
        await this.router.navigate(['/home'], { replaceUrl: true });
        await this.showToast('Prospecto guardado en el dispositivo');
      });
    }
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({ color: 'fucsia', message, duration: 2500 });
    await toast.present();
  }

}
