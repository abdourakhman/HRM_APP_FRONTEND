import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './department/departments.component';
import { DepartmentlistComponent } from './department/departmentlist/departmentlist.component';


const appRoutes:Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'departments',component:DepartmentsComponent},
  {path:'',component:DashboardComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    DepartmentsComponent,
    DepartmentlistComponent
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
