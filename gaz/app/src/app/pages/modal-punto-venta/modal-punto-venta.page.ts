import { Component, Input } from "@angular/core";
import { StorageService } from "../../services/storage/storage.service";
import { ModalController } from "@ionic/angular";
import { PosModel } from "../../models/pos.model";
import {ChartDataSets, ChartOptions} from "chart.js";
import {Color, Label} from "ng2-charts";

import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { QueriesService } from '../../services/queries/queries.service';

@Component({
  selector: "app-modal-punto-venta",
  templateUrl: "./modal-punto-venta.page.html",
  styleUrls: ["./modal-punto-venta.page.scss"]
})
export class ModalPuntoVentaPage {
  @Input() filter: any;

  pos: PosModel;
  posPrice: any;
  posDiscount: any;
  posAccounts: any;
  precio: any;
  descuento: any;
  public year: string;
  public yearList = [];

  constructor(private queries: QueriesService,
    private storage: StorageService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    this.yearList = [2017, 2018, 2019];

    const data = await this.storage.getData('pos');

    this.pos = data.find(item => {
      return (item.code === this.filter.code && item.branch_office === this.filter.branch_office)
    });

    this.posPrice = await this.storage
      .getData("pos_prices")
      .then(items =>
        this.precio = items.filter(item => item.price_id === this.pos.id_price_list)
      );

    this.posDiscount = await this.storage
      .getData("pos_discounts")
      .then(items =>
        this.descuento = items.filter(item => item.discount_id === this.pos.id_discount_list)
      );
    for(let i=0; i< this.precio.length; i++){
      for(let j=0; j< this.descuento.length; j++)
      {
        if(this.precio[i].reference === this.descuento[j].reference)
        {
          this.precio[i].price =  this.precio[i].price - this.descuento[j].discount_vlr;
        }
      }
    }
    
    this.posAccounts = await this.storage
      .getData("pos_accounts")
      .then(items =>
        items.filter(
          item =>
            item.ID_TERC === this.pos.code &&
            item.ID_SUC === this.pos.branch_office
        ).sort((a, b) => a['FECHA'] > b['FECHA'] ? 1 : a['FECHA'] === b['FECHA'] ? 0 : -1)
      );
  }

  toDate(textDate: string) {
    return `${textDate.substring(0,4)}-${textDate.substring(4,6)}-${textDate.substring(6,8)}`;
  }

  public totalKgChartType = 'line';
  public totalKgChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
  public totalKgChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  public totalKgChartLegend = true;
  public totalKgTable = [];
  public totalKgChartPlugins = [pluginAnnotations];
  public totalKgChartOptions: (ChartOptions) = {
    responsive: true,
    legend: {
      labels: {
        fontFamily: '"Museo500", serif',
        fontSize: 7,
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{
        ticks: {
          fontFamily: '"Museo500", serif',
          fontColor: '#c50084',
          fontSize: 6,
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontFamily: '"Museo500", serif',
            fontColor: '#c50084',
            fontSize: 7,
          }
        }
      ]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 5,
        }
      }
    }
  };

  async loadTotalKgZones() {
    const params = {
      profile: 'SU',
      query: 'pos_average',
      params: {
        year: this.year,
        code: this.pos.code
      }
    };
    await this.queries.report(params).subscribe((res:any) => {
      const { report, table, labels } = res;
      this.totalKgChartData = report;
      this.totalKgTable = table;
      this.totalKgChartLabels = labels;
    });
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }
}

