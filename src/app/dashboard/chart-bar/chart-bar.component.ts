import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent {

  constructor(private humanService: HumanService){}

  labels : string[];
  data : number[]; 
  chart = new Chart;
  
  ngOnInit(): void {     
    this.humanService.getNumberOfEmployeesByJob().subscribe(
      (data) => {
        const mapData = new Map<string, number>(Object.entries(data));          
        this.labels = Array.from(mapData.keys());
        this.data= Array.from(mapData.values());

        this.chart = new Chart({
          chart: {
            type: 'bar',
            backgroundColor: '#454d55'
          },
          title: {
            text: 'Number of Employees by Job',
            style: {
              color: '#ffffff'
            }
          },
          xAxis: {
            categories: this.labels,
            labels: {
              style: {
                color: '#ffffff'
              }
            }
          },
          yAxis: {
            title: {
              text: 'Number of Employees',
              style: {
                color: '#ffffff'
              }
            },
            labels: {
              style: {
                color: '#ffffff'
              }
            }
          },
          plotOptions: {
            series: {
              colorByPoint: true
            }
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },
          series: [
            {
              name: 'Job',
              data: this.data.map((value, index) => ({
                name: this.labels[index],
                y: value,
                color: `rgba(252, 128, 12, ${value / Math.max(...this.data)})`
              }))
            }
          ]
        } as any);
        
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
