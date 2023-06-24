import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';

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
import { NgxPaginationModule } from 'ngx-pagination';
import { HumanService } from './services/human.service';
import { DepartmentSlideComponent } from './department-list/department-slide/department-slide.component';
import { ChartBarComponent } from './dashboard/chart-bar/chart-bar.component';
import { DonutChartComponent } from './dashboard/donut-chart/donut-chart.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { HiringComponent } from './employee/hiring/hiring.component';
import { FormComponent } from './contract/form/form.component';


const appRoutes:Routes = [
  {path:'contracts',component:ContractListComponent},
  {path:'contracts/add',component:FormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'employees',component:EmployeeComponent},
  {path:'employee/detail',component:EmployeeDetailComponent},
  {path:'employee/hiring',component:HiringComponent},
  {path:'jobs',component:JobListComponent},
  {path:'timeOffRequests',component:TimeOffComponent},
  {path:'timesheets',component:TimesheetComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'',component:DashboardComponent},
  {path:'**',redirectTo:'/not-found'},

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
    TimeOffComponent,
    DepartmentSlideComponent,
    ChartBarComponent,
    DonutChartComponent,
    TimesheetComponent,
    NotFoundComponent,
    EmployeeDetailComponent,
    HiringComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ChartModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    OrganizationService,
    ResourceService,
    HumanService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
