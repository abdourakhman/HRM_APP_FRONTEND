import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  dataState: DataState = DataState.LOADING;
  employees$!: Observable<Employee[]>;

  currentPage:number = 1;
  

  ngOnInit(): void {
    this.employees$ = this.humanService.listEmployee();
      this.employees$.subscribe(
        ()=>console.log,
        ()=>this.dataState=DataState.ERROR,
        ()=>this.dataState=DataState.COMPLETE
      )
    
  }

  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }
}
