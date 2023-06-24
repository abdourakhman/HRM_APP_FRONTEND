import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Gender } from 'src/app/enumeration/Gender.enum';
import { Department } from 'src/app/models/Department.model';
import { Employee } from 'src/app/models/Employee.model';
import { Job } from 'src/app/models/Job.model';
import { Manager } from 'src/app/models/Manager.model';
import { HumanService } from 'src/app/services/human.service';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {

  constructor(
    private organizationService :OrganizationService, 
    private humanService:HumanService,
    private router:Router){}
  department$ : Observable<Department[]>;
  job$ : Observable<Job[]>;
  manager$ :Observable<Employee[]>;
  manager : Manager;
  employee: any = {};  
  
  ngOnInit(): void {
      this.department$ = this.organizationService.listDepartment();
      this.job$ = this.organizationService.listJob();
      this.manager$ = this.humanService.listManagers();

  }

   public onSubmit(form:NgForm){
    this.employee.firstName = form.value.firstName
    this.employee.name = form.value.name
    this.employee.address = form.value.address
    this.employee.telephone = form.value.telephone
    this.employee.birthday = form.value.birthday
    this.employee.email = form.value.email
    this.employee.gender = form.value.gender
    this.employee.department = form.value.department
    this.employee.job = form.value.job
    this.humanService.findManagerByRegistration(form.value.manager).subscribe(
      (data) => this.employee.manager = data
    )
    if(this.employee.gender==Gender.MALE)
      this.employee.photoUrl = "https://img.freepik.com/vecteurs-premium/profil-avatar-homme-icone-ronde_24640-14044.jpg";
    else
      this.employee.photoUrl = "https://img.freepik.com/vecteurs-premium/profil-avatar-femme-icone-ronde_24640-14042.jpg";
    this.humanService.employeeToSave = this.employee;
    this.router.navigate(['/contracts/add']);
  }
}
