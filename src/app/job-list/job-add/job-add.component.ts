import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationService } from 'src/app/services/organization.service';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent {
  job :any = {};

  constructor(private organizationService:OrganizationService, private router:Router){}

  onSubmit(form:NgForm){
    this.job.title = form.value.title;
    this.job.description = form.value.description;
    this.job.skills = form.value.skills;
    this.job.levelOfResponsibility = form.value.levelOfResponsibility;
    this.organizationService.saveJob(this.job);
    this.router.navigate(["/jobs"]);
  }
}
