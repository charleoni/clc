import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { QueriesService } from "../../services/queries/queries.service";
import { StorageService } from "../../services/storage/storage.service";
import { UserModel } from "src/app/models/user.model";

@Component({
  selector: "app-configurations",
  templateUrl: "./configurations.page.html",
  styleUrls: ["./configurations.page.scss"]
})
export class ConfigurationsPage implements OnInit {
  user: UserModel;

  constructor(
    private queryService: QueriesService,
    private storage: StorageService,
    private toastCtrl: ToastController
  ) {}

  async ngOnInit() {
    this.user = await this.storage.getData("user");
  }

  async getCities() {
    const params = {
      query: "cities"
    };
    this.queryService.query(params).subscribe(data => {
      this.storage.setData("cities", data);
      this.showToast("Actualización finalizada correctamente");
    });
  }

  async getPos() {
    const params = {
      query: "puntos_ventas_basico",
      params: {
        idSupervisor: this.user.idSupervisor
      }
    };
    this.queryService.query(params).subscribe(data => {
      this.storage.setData("pos", data);
      this.showToast("Actualización finalizada correctamente");
    });
  }

  async getListaprecios() {
    const params = {
      query: "lista_precios",
    };
    this.queryService.query(params).subscribe(data => {
      this.storage.setData("pos_prices", data);
      this.showToast("Actualización finalizada correctamente");
    });
  }

  async getListadescuentos() {
    const params = {
      query: "lista_descuentos",
    };
    this.queryService.query(params).subscribe(data => {
      this.storage.setData("pos_discounts", data);
      this.showToast("Actualización finalizada correctamente");
    });
  }

  async getCartera() {
    const params = {
      query: "cartera",
    };
    this.queryService.query(params).subscribe(data => {
      this.storage.setData("pos_accounts", data);
      this.showToast("Actualización finalizada correctamente");
    });
  }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      color: "fucsia",
      message,
      duration: 2500
    });
    await toast.present();
  }
}
