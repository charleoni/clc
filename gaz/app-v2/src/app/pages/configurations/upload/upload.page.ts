import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageService } from '../../../services/storage.service';
import { ProspectService } from '../../../services/pages/prospect.service';
import { Prospect } from '../../../models/prospect.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(
      private storage: StorageService,
      private prospect: ProspectService,
      private loadingCtrl: LoadingController,
  ) { }

  loading;
  prospects: Prospect[];

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Procesando...',
      duration: 2500,
    });
  }

  async uploadProspects() {
    await this.loading.present();
    const prospectList = [];
    this.prospects = await this.storage.read('_prospects');
    this.prospects.map( async p => {
      if(!p.id) {
        await this.prospect.save(p).subscribe(async prospect => {
          await Object.assign(p, { id: prospect.id });
          await prospectList.push(p);
        });
      }
    });
    setTimeout(() => {
      console.log('prospectList: ', prospectList);
      if (prospectList.length) {
        this.storage.save('_prospects', prospectList);
      }
      this.loading.dismiss();
    }, 3000);
  }

}
