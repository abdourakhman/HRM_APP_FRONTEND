import { Component, OnInit } from '@angular/core';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { Employee } from 'src/app/models/Employee.model';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  constructor(private humanService : HumanService){}

  employees?: Employee[];
  currentPage:number = 1;
  dataState : DataState = DataState.LOADING;

  ngOnInit(): void {
    this.humanService.employee$.subscribe(
      (employees) => {this.employees = employees; this.dataState = DataState.COMPLETE;},
      ()=> this.dataState = DataState.ERROR,
      ()=> this.dataState = DataState.COMPLETE
    )
  }

  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }

  onSelectEmployee(id:number){
    this.humanService.getSelectedEmployee(id);
  }
}
