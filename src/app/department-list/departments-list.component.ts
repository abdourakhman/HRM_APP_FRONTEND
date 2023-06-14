import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Observable, Subscription } from 'rxjs';
import { Department } from '../models/Department.model';
import { DataState } from '../enumeration/DataState.enum';

@Component({
  selector: 'app-department-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  constructor(private organizationService : OrganizationService){}
  dataState:DataState = DataState.LOADING
  departments$ !: Observable<Department[]>;
  departmentSubscription! :Subscription;

  ngOnInit(): void {
      this.departments$ = this.organizationService.listDepartment();
      this.departmentSubscription = this.departments$.subscribe(
        ()=> console.log,
        ()=> this.dataState = DataState.ERROR,
        ()=> this.dataState = DataState.COMPLETE
      )
  }
  

}
