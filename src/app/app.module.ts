import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './department/departments.component';
import { DepartmentlistComponent } from './department/departmentlist/departmentlist.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeProfilComponent } from './employee/employee-profil/employee-profil.component';
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { ContractComponent } from './contract/contract.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { TimeOffComponent } from './time-off/time-off.component';


const appRoutes:Routes = [
  {path:'contracts',component:ContractComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'jobs',component:JobComponent},
  {path:'timeOffRequests',component:TimeOffComponent},
  {path:'',component:DashboardComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    DepartmentsComponent,
    DepartmentlistComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeProfilComponent,
    JobComponent,
    JobListComponent,
    ContractComponent,
    ContractListComponent,
    TimeOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
