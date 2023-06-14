import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { Observable } from 'rxjs';
import { timeOffRequest } from '../models/TimeOffRequest.model';

@Component({
  selector: 'app-time-off',
  templateUrl: './time-off.component.html',
  styleUrls: ['./time-off.component.css']
})
export class TimeOffComponent implements OnInit{

  timeOffs$! : Observable<timeOffRequest[]>;
  constructor(private resourceService: ResourceService){}
  
  ngOnInit(): void {
    this.timeOffs$ = this.resourceService.listTimeOffRequest();
  }

}
