import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Observable } from 'rxjs';
import { Department } from '../models/Department.model';
import { DataState } from '../enumeration/DataState.enum';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private organizationService : OrganizationService){}
  dataState:DataState = DataState.LOADING;
  departments$! : Observable<Department[]>;
  
  ngOnInit(): void {
      this.departments$ = this.organizationService.listDepartment();
  }
}
