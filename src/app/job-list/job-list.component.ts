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
  numberEmployeeByJob:Map<string,number> = new Map();
  totalEmployee:number;
  ngOnInit(){
    this.humanService.getNumberOfEmployeesByJob().subscribe(
      (data) => {
        this.numberEmployeeByJob = new Map<string, number>(Object.entries(data));          
      }
    );

    this.humanService.getNumberOfEmployees().subscribe(
      (data) => {
        this.totalEmployee= data/8; //c'est juste aléatoire
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
