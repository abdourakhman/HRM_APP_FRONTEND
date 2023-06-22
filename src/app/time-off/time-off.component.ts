import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { Observable, Subscription } from 'rxjs';
import { TimeOffRequest } from '../models/TimeOffRequest.model';
import { DataState } from '../enumeration/DataState.enum';

@Component({
  selector: 'app-time-off',
  templateUrl: './time-off.component.html',
  styleUrls: ['./time-off.component.css']
})
export class TimeOffComponent implements OnInit{
  currentPage:number = 1;
  dataState:DataState = DataState.LOADING;
  timeOffs$! : Observable<TimeOffRequest[]>;
  constructor(private resourceService: ResourceService){}
  
  ngOnInit(): void {
    this.timeOffs$ = this.resourceService.listTimeOffRequest();
    this.timeOffs$.subscribe(
        ()=> console.log,
        ()=> this.dataState = DataState.ERROR,
        ()=> this.dataState = DataState.COMPLETE
    )
  }
  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }
}
