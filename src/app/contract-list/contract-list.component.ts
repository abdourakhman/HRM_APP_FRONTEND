import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, tap } from 'rxjs';
import { ResourceService } from '../services/resource.service';
import { Contract } from '../models/Contract.model';
import { DataState } from '../enumeration/DataState.enum';
import { Employee } from '../models/Employee.model';
import { HumanService } from '../services/human.service';
import { error } from 'highcharts';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit, OnDestroy{

  constructor(private resourceService:ResourceService, private humanService:HumanService){}
  currentPage:number = 1;
  contracts$?: Observable<Contract[]>;
  contractSubscription! : Subscription;
  dataState: DataState = DataState.LOADING;
  ngOnInit(): void {
    this.contracts$ = this.resourceService.listContract();
    this.contractSubscription = this.contracts$.subscribe(
      (value)=>{console.log},
      (error)=>this.dataState = DataState.ERROR,
      ()=>this.dataState=DataState.COMPLETE
    )
  }
  ngOnDestroy(): void {
    this.contractSubscription.unsubscribe();
  }

  onFindHumanResourceManagerName(registrationNumber:string){
    let rhName:string;
    this.humanService.getEmployeeByRegistration(registrationNumber).subscribe(
      (data) => rhName =`${data.firstName} ${data.name}`,
      (error) => console.log(error)
    )
    return rhName;
  }
  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }

}
