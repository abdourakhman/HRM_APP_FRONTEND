import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/departments-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeProfilComponent } from './employee/employee-profil/employee-profil.component';
import { JobListComponent } from './job-list/job-list.component';
import { ContractComponent } from './contract/contract.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { TimeOffComponent } from './time-off/time-off.component';
import { OrganizationService } from './services/department.service';


const appRoutes:Routes = [
  {path:'contracts',component:ContractComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'jobs',component:JobListComponent},
  {path:'timeOffRequests',component:TimeOffComponent},
  {path:'',component:DashboardComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    DepartmentListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeProfilComponent,
    JobListComponent,
    ContractComponent,
    ContractListComponent,
    TimeOffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    OrganizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
