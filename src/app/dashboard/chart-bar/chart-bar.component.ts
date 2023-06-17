import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent {
  chart = new Chart({
    chart: {
      type: 'bar'
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
