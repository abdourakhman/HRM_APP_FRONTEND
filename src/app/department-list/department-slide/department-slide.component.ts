import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { Department } from 'src/app/models/Department.model';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-department-slide',
  templateUrl: './department-slide.component.html',
  styleUrls: ['./department-slide.component.css']
})
export class DepartmentSlideComponent {
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
