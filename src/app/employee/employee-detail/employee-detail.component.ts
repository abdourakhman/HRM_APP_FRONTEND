import { Component, OnInit } from '@angular/core';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { Employee } from 'src/app/models/Employee.model';
import { TimeOffRequest } from 'src/app/models/TimeOffRequest.model';
import { Timesheet } from 'src/app/models/Timesheet.model';
import { HumanService } from 'src/app/services/human.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  constructor(private humanService:HumanService, private resourceService:ResourceService){}
  employee? :Employee
  timesheets! : Timesheet[]
  timeoffs! : TimeOffRequest[]
  dataState : DataState = DataState.LOADING
  ngOnInit(): void {
    this.employee = this.humanService.selectedEmployee;
    this.resourceService.listTimesheets().subscribe(
      (data) => this.timesheets = data,
      ()=>this.dataState = DataState.ERROR,
      ()=>this.dataState  = DataState.COMPLETE
    )
    this.resourceService.listTimeOffRequest().subscribe(
      (data) => this.timeoffs = data,
      ()=>this.dataState = DataState.ERROR,
      ()=>this.dataState  = DataState.COMPLETE
    )
  }
}
