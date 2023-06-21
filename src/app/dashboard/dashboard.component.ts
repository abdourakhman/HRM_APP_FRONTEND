import { Component, OnInit } from '@angular/core';
import { HumanService } from '../services/human.service';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  numberOfEmployees : number =0;
  numberOfMan:number = 0;
  numberOfWoman:number = 0;
  numberOfActiveEmployees : number =0;
  averageAgeOfEmployee : number = 0;
  averageSalary : number = 0;
  numberOfOngoingProject : number = 0;
  departmentNames: string[];
  numberOfEmployeesByDepartment : any[];
  numberOfEmployeesByJob :any ;
  constructor(private humanService: HumanService, private resourceService : ResourceService){}

  ngOnInit(): void {
      this.humanService.getNumberOfEmployees().subscribe(
        (data) => this.numberOfEmployees = data,
      )

      this.humanService.getNumberOfEmployeesByDepartment().subscribe(
        (data) => {
          const mapData = new Map<string, number>(Object.entries(data));          
          this.departmentNames = Array.from(mapData.keys());
          this.numberOfEmployeesByDepartment= Array.from(mapData.values());
        },
        (error) => {
          console.error(error);
        }
      );
      this.humanService.getNumberOfActiveEmployees().subscribe(
        (data) => this.numberOfActiveEmployees = data
      )

      this.humanService.getNumberOfEmployeesByJob().subscribe(
        (data) => this.numberOfEmployeesByJob = data
      )

      this.humanService.getNumberOfEmployeesByGender().subscribe(
        (data) => {const mapData = new Map<string, number>(Object.entries(data));          
        // Men then Women
        this.numberOfMan = Array.from(mapData.values())[0];
        this.numberOfWoman  = Array.from(mapData.values())[1];
      },
      (error) => {
        console.error(error);
      }
      )

      this.humanService.getAverageAgeOfEmployees().subscribe(
        (data) => this.averageAgeOfEmployee = data
      )
      
      this.resourceService.getAverageSalary().subscribe(
        (data) => this .averageSalary = data
      )

      this.resourceService.getNumberOngoingProject().subscribe(
        (data) => this .numberOfOngoingProject = data
      )
  }

}
