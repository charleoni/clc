import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from "@ionic/angular";
import {ChartDataSets, ChartOptions, ChartType, RadialChartOptions} from 'chart.js';
import {Color, BaseChartDirective, Label, MultiDataSet, SingleDataSet} from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { QueriesService } from '../../services/queries/queries.service';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  public year: string;
  public yearList = [];
  constructor(private queries: QueriesService) { }

  ngOnInit() {
    this.yearList = [2017, 2018, 2019];
  }

  // Ion Slides
  @ViewChild('sliderMain', { static: true }) slides: IonSlides;

  // Ventas de kilos zonas - Pie
  public salesKgZonesType: ChartType = 'pie';
  public salesKgZonesLabels: Label[] = [];
  public salesKgZonesData: number[] = [];
  public salesKgZonesLegend = true;
  public salesKgZonesPlugins = [pluginDataLabels];

  public salesKgZonesColors = [
    { backgroundColor: ['#4caf50', '#ff5722', '#676BCC', '#607d8b', '#3f51b5'] },
  ];

  public salesKgZonesOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
      labels: {
        fontFamily: '"Museo500", serif',
        fontSize: 7,
      }
    },
    plugins: {
      datalabels: {
        font: {
          size: 7,
          family: '"Museo500", serif',
        },
        color: '#fff',
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  async loadSalesKgZones() {
    const params = {
      profile: 'DC',
      query: 'ventas_zonas_kg',
      params: {
        year: this.year
      }
    };
    this.queries.report(params).subscribe((res:any) => {
      const {labels, data} = res;
      this.salesKgZonesLabels = labels;
      this.salesKgZonesData = data;
    });
  }

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  // Line
  public lineChartType = 'line';
  public lineChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
  public lineChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  public lineChartLegend = true;
  public lineChartPlugins = [pluginAnnotations];
  public lineChartOptions: (ChartOptions) = {
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

  public lineChartColors: Color[] = [];

  async loadPricesKgZones() {
    const params = {
      profile: 'DC',
      query: 'precios_zonas_kg',
      params: {
        year: this.year
      }
    };
    this.queries.report(params).subscribe((res:any) => {
      this.lineChartData = res;
    });
  }

  // Line Total Kilos Zonas

  // TODO: Implementar variables del gráfico
  public totalKgChart = {
    type: 'line'
  };
  public totalKgChartType = 'line';
  public totalKgChartData: ChartDataSets[] = [
    { data: [], label: '' }
  ];
  public totalKgChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  public totalKgChartLegend = true;
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

  public totalKgChartColors: Color[] = [];

  async loadTotalKgZones() {
    const params = {
      profile: 'DC',
      query: 'total_zonas_kg',
      params: {
        year: this.year
      }
    };
    this.queries.report(params).subscribe((res:any) => {
      this.totalKgChartData = res;
    });
  }

  // Bar Chart
  public barChartType: ChartType = 'bar';
  public barChartData: ChartDataSets[] = [{ data: [], label: '' }];
  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        ticks: {
          fontFamily: '"Museo500", serif',
          fontColor: '#c50084',
          fontSize: 7,
        }
      }],
      yAxes: [{
        ticks: {
          fontFamily: '"Museo500", serif',
          fontColor: '#c50084',
          fontSize: 7,
          padding: 0
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          family: '"Museo500", serif',
          size: 7,
        },
        color: '#c50084',
      }
    },
  };

  async loadReferencesKg() {
    const params = {
      profile: 'DC',
      query: 'referencias_kg',
      params: {
        year: this.year
      }
    };
    this.queries.report(params).subscribe((res:any) => {
      const { data, labels } = res;
      this.barChartData = data;
      this.barChartLabels = labels;
    });
  }

}
