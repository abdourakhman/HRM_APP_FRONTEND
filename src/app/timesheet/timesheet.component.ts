import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { DataState } from '../enumeration/DataState.enum';
import { Observable } from "rxjs";
import { Timesheet } from '../models/Timesheet.model';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit{

  constructor(private resourceService: ResourceService){}
  currentPage : number = 1;
  dataState : DataState  = DataState.LOADING;
  timesheet$ : Observable<Timesheet[]>
  ngOnInit(): void {
    this.timesheet$ = this.resourceService.listTimesheets();
    this.timesheet$.subscribe(
      (data) => console.log(data),
      ()=>this.dataState = DataState.ERROR,
      ()=>this.dataState  = DataState.COMPLETE
    )
  }

  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }
}
