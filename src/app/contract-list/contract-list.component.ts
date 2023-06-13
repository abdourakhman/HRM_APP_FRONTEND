import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResourceService } from '../services/resource.service';
import { Contract } from '../models/Contract.model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit{

  constructor(private resourceService:ResourceService){}
  
  contracts$!: Observable<Contract[]>;

  ngOnInit(): void {
    this.contracts$ = this.resourceService.listContract();
  }


}
