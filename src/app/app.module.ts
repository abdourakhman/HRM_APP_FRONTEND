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
import { TimeOffComponent } from './time-off/time-off.component';
import { OrganizationService } from './services/organization.service';
import { ResourceService } from './services/resource.service';
import { ContractListComponent } from './contract-list/contract-list.component';


const appRoutes:Routes = [
  {path:'contracts',component:ContractListComponent},
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
    OrganizationService,
    ResourceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
