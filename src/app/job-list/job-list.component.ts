import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Job } from '../models/Job.model';
import { OrganizationService } from '../services/organization.service';
import { DataState } from '../enumeration/DataState.enum';
import { HumanService } from '../services/human.service';

@Component({
  selector: 'app-job',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit{

  constructor(private humanService:HumanService, private organizationService : OrganizationService){}
  
  dataState:DataState = DataState.LOADING
  jobs$! : Observable<Job[]>;
  jobSubscription!: Subscription;
  numberEmployeeByJob: number[];
  totalEmployee:number;
  ngOnInit(){
    this.humanService.getNumberOfEmployeesByJob().subscribe(
      (data) => {
        const mapData = new Map<string, number>(Object.entries(data));          
        this.numberEmployeeByJob= Array.from(mapData.values());
      }
    );

    this.humanService.getNumberOfEmployees().subscribe(
      (data) => {
        this.totalEmployee= data;
      }
    );


    this.jobs$ = this.organizationService.listJob();
    this.jobSubscription = this.jobs$.subscribe(
      value => console.log,
      error => this.dataState = DataState.ERROR,
      ()=>this.dataState=DataState.COMPLETE
    )
  }

  onGetRepartitionEmployeeByJob(nbEmployee):number{
   return (nbEmployee/this.totalEmployee)*100;
  }
}
