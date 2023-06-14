import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { RestResponse } from 'src/app/models/RestResponse.model';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  constructor(private humanService : HumanService){}
  dataState:DataState = DataState.LOADING;
  employees$!  :Observable<RestResponse[]>;
  numberOfPage:number;

  ngOnInit(): void {
    this.employees$ = this.humanService.listEmployee();
      this.employees$.subscribe(
        ()=>console.log,
        ()=>this.dataState=DataState.ERROR,
        ()=>this.dataState=DataState.COMPLETE
      )
  }

}
