import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { ResourceService } from '../services/resource.service';
import { Contract } from '../models/Contract.model';
import { DataState } from '../enumeration/DataState.enum';
import { HumanService } from '../services/human.service';
import { Employee } from '../models/Employee.model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit{

  constructor(private resourceService:ResourceService, private humanService:HumanService){}
  currentPage:number = 1;
  contracts$?: Observable<Contract[]>;
  dataState: DataState = DataState.LOADING;
  ngOnInit(): void {
    this.contracts$ = this.resourceService.listContract();
    this.contracts$.subscribe(
      (value)=>console.log(value),
      ()=>this.dataState = DataState.ERROR,
      ()=>{this.dataState=DataState.COMPLETE; }
    )
  }
  
  

  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }
}
