import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { StorageService } from '../../services/storage.service';
import { LocalDataService } from '../../services/local-data.service';
import { Pos } from '../../models/pos.model';
import { PosVisit, Need, Inventory, InventoryList, CommercialBehavior } from '../../models/pos_visit.model';
import { PosInventory } from '../../models/pos_inventory.model';

@Component({
  selector: 'app-pos-visit',
  templateUrl: './pos-visit.page.html',
  styleUrls: ['./pos-visit.page.scss'],
})
export class PosVisitPage implements OnInit {

  @ViewChild('slider', { static: true }) slides: IonSlides;

  constructor(
      private route: ActivatedRoute,
      private local: LocalDataService,
      private storage: StorageService,
      private toastCtrl: ToastController,
      private camera: Camera,
  ) { }

  id: string;
  code: string;
  branch_code: string;

  steps = {
    needs: false,
    inventory: false,
    commercial: false,
    observations: false,
  };

  pos: Pos;
  visit: PosVisit;
  inventories: PosInventory[];
  imageData;
  slide: string = '';
  goBack: boolean = true;

  slideOptions = { allowTouchMove: false };

  buttonOptions = [
    { slide: 'needs', title: 'Necesidades' },
    { slide: 'inventory', title: 'Inventarios' },
    { slide: 'commercial', title: 'Comportamiento comercial' },
    { slide: 'observations', title: 'Observaciones' },
  ];

  async ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.code = this.route.snapshot.paramMap.get('code');
    this.branch_code = this.route.snapshot.paramMap.get('branch_code');

    this.visit = await this.local.getOne('_visits', 'id', this.id);
    this.pos = await this.local.getPos(this.code, this.branch_code);

    if (!this.visit.needs) {
      this.visit.needs = new Need('', false, '');
    }

    if (!this.visit.inventory) {
      this.visit.inventory = new Inventory([], '', '');
    }

    if (!this.visit.commercial_behavior) {
      this.visit.commercial_behavior = new CommercialBehavior(false, '');
    }

    this.inventories = await this.local.getPosInventory(this.code, this.branch_code);

    if (this.inventories.length && !this.visit.inventory.list.length) {
      const inventoryList = [];
      this.inventories.map(item => {
        const { product, quantity } = item;
        inventoryList.push(new InventoryList(product, quantity, null));
      });
      this.visit.inventory.list = inventoryList;
    }

    this.validateData();

    if (this.visit && !this.visit.start_date) {
      const user = await this.local.getAll('user');
      this.visit.start_date = new Date();
      this.visit.start_location = {};
      this.visit.user_id = user.id;
      await this.local.updateOne('_visits', 'id', this.id, this.visit);
    }

  }

  isChecked(item) {
    return (this.steps[item]) ? 'radio-button-on' : 'radio-button-off';
  }

  async goToSlide(i: number, slide: string = '', goBack: boolean = false): Promise<void> {
    this.slide = slide;
    this.goBack = goBack;
    await this.slides.lockSwipes(false);
    await this.slides.slideTo(i);
    await this.slides.lockSwipes(true);
  }

  async save(): Promise<void> {
    this.validateData();
    await this.local.updateOne('_visits', 'id', this.id, this.visit);
  }

  finalize(): boolean {
    return !(this.steps.needs && this.steps.inventory && this.steps.commercial && this.steps.observations);
  }

  validateData(): void {
    this.validateNeeds();
    this.validateInventory();
    this.validateCommercial();
    this.validateObservations();
  }

  private validateNeeds(): void {
    if (this.visit.needs && this.visit.needs.observations) {
      this.steps.needs = (!(this.visit.needs.promise && !this.visit.needs.commitment));
    } else {
      this.steps.needs = false;
    }
  }

  private validateInventory(): void {
    if (this.visit.inventory.observations && this.visit.inventory.image && this.visit.inventory.list) {
      this.steps.inventory = true;
      if (this.visit.inventory.list.length) {
        this.steps.inventory = (!this.visit.inventory.list.find(item => (item.quantity && item.check === null )));
      } else {
        this.steps.inventory = false;
      }
    } else {
      this.steps.inventory = false;
    }
  }

  private validateCommercial(): void {
    this.steps.commercial = !!(this.visit.commercial_behavior && this.visit.commercial_behavior.observations);
  }

  private validateObservations(): void {
    this.steps.observations = !!(this.visit.observations);
  }

  async showCamera() {
    const options: CameraOptions = {
      quality: 40,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 720,
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      this.visit.inventory.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (error) => {
      console.log("error: "+JSON.stringify(error));
    });
  }

}
