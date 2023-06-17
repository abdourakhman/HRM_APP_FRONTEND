import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {
  chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Number employees by Departement'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'departments',
        data: [1, 2, 3]
      }
    ]
  } as any);

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
