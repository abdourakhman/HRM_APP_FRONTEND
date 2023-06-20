import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ResourceService } from '../services/resource.service';
import { Contract } from '../models/Contract.model';
import { DataState } from '../enumeration/DataState.enum';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit, OnDestroy{

  constructor(private resourceService:ResourceService){}
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
  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }

}
