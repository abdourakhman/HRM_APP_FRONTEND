import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Observable } from 'rxjs';
import { Department } from '../models/Department.model';

@Component({
  selector: 'app-department-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  departments: any[] = [];
  constructor(private organizationService : OrganizationService){}
  departments$ !: Observable<Department[]>;

  ngOnInit(): void {
      this.departments$ = this.organizationService.listDepartment();
  }

}
