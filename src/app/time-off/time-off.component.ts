import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { Observable, Subscription } from 'rxjs';
import { timeOffRequest } from '../models/TimeOffRequest.model';
import { DataState } from '../enumeration/DataState.enum';

@Component({
  selector: 'app-time-off',
  templateUrl: './time-off.component.html',
  styleUrls: ['./time-off.component.css']
})
export class TimeOffComponent implements OnInit{

  dataState:DataState = DataState.LOADING;
  timeOffs$! : Observable<timeOffRequest[]>;
  timeOffSubscription!:Subscription;
  constructor(private resourceService: ResourceService){}
  
  ngOnInit(): void {
    this.timeOffs$ = this.resourceService.listTimeOffRequest();
    this.timeOffSubscription = this.timeOffs$.subscribe(
        ()=> console.log,
        ()=> this.dataState = DataState.ERROR,
        ()=> this.dataState = DataState.COMPLETE
    )
  }

}
