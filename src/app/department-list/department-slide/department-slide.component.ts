import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { Department } from 'src/app/models/Department.model';
import { HumanService } from 'src/app/services/human.service';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-department-slide',
  templateUrl: './department-slide.component.html',
  styleUrls: ['./department-slide.component.css']
})
export class DepartmentSlideComponent implements OnInit {
  constructor(private organizationService : OrganizationService, private humanService:HumanService){}
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

  onSelectDepartment(departmentID:number){
    this.humanService.listEmployeeOfDepartment(departmentID);
  }
}
