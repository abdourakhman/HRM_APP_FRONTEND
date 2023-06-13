import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/Job.model';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-job',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  constructor(private organizationService : OrganizationService){}

  jobs$! : Observable<Job[]>;

  ngOnInit(){
    this.jobs$ = this.organizationService.listJob();
  }
}
