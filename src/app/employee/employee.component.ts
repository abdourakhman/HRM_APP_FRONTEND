import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Observable } from 'rxjs';
import { Department } from '../models/Department.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private organizationService : OrganizationService){}
  
  departments$! : Observable<Department[]>;

  ngOnInit(): void {
      this.departments$ = this.organizationService.listDepartment();
  }
}
