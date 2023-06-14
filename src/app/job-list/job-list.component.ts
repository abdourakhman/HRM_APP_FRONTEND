import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Job } from '../models/Job.model';
import { OrganizationService } from '../services/organization.service';
import { DataState } from '../enumeration/DataState.enum';

@Component({
  selector: 'app-job',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{

  constructor(private organizationService : OrganizationService){}
  
  dataState:DataState = DataState.LOADING
  jobs$! : Observable<Job[]>;
  jobSubscription!: Subscription;

  ngOnInit(){
    this.jobs$ = this.organizationService.listJob();
    this.jobSubscription = this.jobs$.subscribe(
      value => console.log,
      error => this.dataState = DataState.ERROR,
      ()=>this.dataState=DataState.COMPLETE
    )
  }
}
