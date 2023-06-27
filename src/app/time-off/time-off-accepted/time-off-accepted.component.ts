import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { TimeOffRequest } from 'src/app/models/TimeOffRequest.model';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-time-off-accepted',
  templateUrl: './time-off-accepted.component.html',
  styleUrls: ['./time-off-accepted.component.css']
})
export class TimeOffAcceptedComponent {
  currentPage:number = 1;
  dataState:DataState = DataState.LOADING;
  timeOffs$! : Observable<TimeOffRequest[]>;
  constructor(private resourceService: ResourceService){}
  
  ngOnInit(): void {
    this.timeOffs$ = this.resourceService.listTimeOffRequest("timeOffRequests/accepted");
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

