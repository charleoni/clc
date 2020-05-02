import {Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides, ModalController, ToastController} from '@ionic/angular';
import { ModalDescuentoPage } from '../modal-descuento/modal-descuento.page';
import { ModalPuntoVentaPage } from '../modal-punto-venta/modal-punto-venta.page';
import { NeedModel } from '../../models/need.model';
import { InventoryModel, ListDetail } from "../../models/inventory.model";
import { CommercialBehaviorModel } from "../../models/commercial-behavior.model";
import { QueriesService } from "../../services/queries/queries.service";
import {ActivatedRoute, Router} from "@angular/router";
import { StorageService } from "../../services/storage/storage.service";
import { PosModel } from "../../models/pos.model";

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

import { environment } from '../../../environments/environment';
import { VisitReportService } from '../../services/visit/visit-report.service';
import { VisitLocalModel } from "../../models/visit-local.model";
const { url } = environment;

@Component({
  selector: 'app-visita',
  templateUrl: './visita.page.html',
  styleUrls: ['./visita.page.scss'],
})
export class VisitaPage implements OnInit {

  @ViewChild('sliderMain', { static: true }) slides: IonSlides;

  option: string;
  displayHeader: boolean = true;
  needs: NeedModel;
  inventory: InventoryModel;
  inventoryFinished: boolean = false;
  commercial: CommercialBehaviorModel;
  observations: string = '';

  pos: PosModel;
  name: string;
  id: string;
  code: string;
  branch_office: string;

  image: any = '';
  imageData: any = '';

  slideOpts = {
    allowTouchMove: false
  };

  visit: VisitLocalModel;
  constructor(private storage: StorageService,
              private modalCtrl: ModalController,
              private queriesService: QueriesService,
              private route: ActivatedRoute,
              private camera: Camera,
              private transfer: FileTransfer,
              private visitReport: VisitReportService,
              private router: Router,
              private toastCtrl: ToastController,) { }

  async ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code');
    this.branch_office = this.route.snapshot.paramMap.get('branch_office');
    this.id = this.route.snapshot.paramMap.get('id');

    const data = await this.storage.getData('pos');
    this.pos = data.find(item => {
      return (item.code === this.code && item.branch_office === this.branch_office)
    });

    this.visit = await this.storage.getData(`visit-${this.id}`);

    console.log('Visit Data: ', this.visit)

    this.needs = (this.visit && this.visit.needs) ? this.visit.needs : {
      observations: '',
      promise: false
    };

    this.inventory = (this.visit && this.visit.inventory) ? this.visit.inventory : {
      list: [],
      image: "assets/img/no-photo.jpg",
      observations: ''
    };

    this.commercial = (this.visit && this.visit.commercial) ? this.visit.commercial : {
      observations: '',
      compliance: false
    };

    this.observations = (this.visit && this.visit.observations) || '';

    if (!this.visit) {
      this.startVisit();
    }

    if (!this.inventory.list.length) {
      this.getInventory();
    }
    this.inventoryChecked();
  }

  getInventory() {
    const params = {
      query: 'pos_inventory',
      params: { code: this.code, branch_office: this.branch_office }
    };

    this.queriesService.query(params).subscribe((data: ListDetail) => {
      this.inventory.list = this.inventory.list.concat(data);
    });
  }

  inventoryChecked() {
    this.inventory.list.map(item => {
      this.inventoryFinished =  (item.check) ? true : false;
    });
    // this.inventoryFinished =  (this.inventoryFinished && this.imageData && this.inventory.observations) ? true : false;
    this.inventoryFinished =  (this.inventoryFinished && this.inventory.image && this.inventory.observations) ? true : false;
  }

  async showModalDiscount() {
    const modal = await this.modalCtrl.create({
      component: ModalDescuentoPage,
      componentProps: {}
    });
    await modal.present();
  }

  async showModalCustomer() {
    const modal = await this.modalCtrl.create({
      component: ModalPuntoVentaPage,
      componentProps: {
        filter: {
          code: this.code,
          branch_office: this.branch_office
        }
      }
    });
    await modal.present();
  }

  async goToSlide(i: number, option: string = '', display: boolean = true) {
    this.option = option;
    this.displayHeader = display;
    await this.slides.lockSwipes(false);
    await this.slides.slideTo(i);
    await this.slides.lockSwipes(true);
    if(!option){
      this.inventoryChecked();
    }
  }

  async saveOption(option){

    if(!this.visit) {
      this.visit = await this.storage.getData(`visit-${this.id}`);
    }

    if(option == 'needs') {
      Object.assign(this.visit, {
        needs: {
          observations: this.needs.observations,
          promise: this.needs.promise
        }
      });
    } else if(option === 'inventory') {
      Object.assign(this.visit, {
        inventory: {
          image: this.inventory.image,
          list: this.inventory.list,
          observations: this.inventory.observations,
        }
      });
    } else if(option === 'commercial') {
      Object.assign(this.visit, {
        commercial: {
          observations: this.commercial.observations,
          compliance: this.commercial.compliance,
        }
      });
    } else if(option === 'observations') {
      Object.assign(this.visit, {
        observations: this.observations
      });
    }

    await this.storage.setData(`visit-${this.id}`, this.visit);

    this.goToSlide(0);
  }

  async showCamera() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      this.inventory.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (error) => {
      alert("error: "+JSON.stringify(error))
    });
  }

  async upload() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const options: FileUploadOptions = {
      fileKey: 'fileName',
      fileName: `report-${this.id}.jpg`,
      headers: {}
    };

    await fileTransfer
        .upload(this.imageData, `${url}upload/visit`, options)
        .then((result) => {
          console.log(result)
        });
  }

  async startVisit() {
    const startDate = new Date();
    await this.storage.setData(`visit-${this.id}`, { id: this.id, startDate });
    this.visitReport.update(this.id, { startDate }).subscribe(response => {
      console.log(response)
    });
  }

  async sendVisit() {
    this.upload();
    const report = {
      need: this.needs,
      inventory: this.inventory,
      commercialBehavior: this.commercial,
      observation: this.observations,
      endDate: new Date(),
      isFinished: true
    };

    this.visitReport.update(this.id, report).subscribe(async (response) => {
      await this.storage.destroyData(`visit-${this.id}`);
      const alert = await this.toastCtrl.create({
        color: 'fucsia',
        message: "Visita finalizada con éxito",
        duration: 2500
      });
      await alert.present();
      await this.router.navigate(['/home'], { replaceUrl: true });

    }, (error) => {
      console.log(error);
    })
  }

}
