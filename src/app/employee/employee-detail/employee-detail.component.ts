import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/Employee.model';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  constructor(private humanService:HumanService){}
  employee? :Employee
  ngOnInit(): void {
    this.employee = this.humanService.selectedEmployee;
  }

}
