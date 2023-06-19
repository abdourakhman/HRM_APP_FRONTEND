import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  constructor(private humanService: HumanService){}

  labels : string[];
  data : number[]; 
  chart = new Chart;
  
  ngOnInit(): void {     
    this.humanService.getNumberOfEmployeesByDepartment().subscribe(
      (data) => {
        const mapData = new Map<string, number>(Object.entries(data));          
        this.labels = Array.from(mapData.keys());
        this.data= Array.from(mapData.values());
        this.chart = new Chart({
          chart: {
            type: 'pie',
            backgroundColor: '#454d55'
          },
          title: {
            text: 'Number of Employees by Department',
            style: {
              color: '#ffffff'
            }
          },
          plotOptions: {
            pie: {
              innerSize: '60%',
              depth: 30,
              dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y}'
              }
            }
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Department',
              data: this.data.reduce((result, value, index) => {
                if (value !== null && value !== 0) {
                  result.push({
                    name: this.labels[index],
                    y: value
                  });
                }
                return result;
              }, [])
            }
          ],
          colors: ['#900C3F','#fd5901','#f7c034','#f1af05',' #C70039']
        } as any);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
