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
  numberOfActiveEmployees : number =0;
  averageAgeOfEmployee : number = 0;
  averageSalary : number = 0;
  numberOfOngoingProject : number = 0;
  departmentNames: string[];
  numberOfEmployeesByDepartment : any[];
  numberOfEmployeesByJob :any ;
  numberOfEmployeesByGender : any;

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
          console.log(this.departmentNames);
          console.log(this.numberOfEmployeesByDepartment);
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
        (data) => {this.numberOfEmployeesByGender = data}
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
