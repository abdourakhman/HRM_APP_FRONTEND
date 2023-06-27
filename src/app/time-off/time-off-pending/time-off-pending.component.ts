import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { RequestTimeOffStatus } from 'src/app/enumeration/RequestTimeOffStatus.enum';
import { TimeOffRequest } from 'src/app/models/TimeOffRequest.model';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-time-off-pending',
  templateUrl: './time-off-pending.component.html',
  styleUrls: ['./time-off-pending.component.css']
})
export class TimeOffPendingComponent {
  currentPage:number = 1;
  dataState:DataState = DataState.LOADING;
  timeOffs$! : Observable<TimeOffRequest[]>;
  constructor(private resourceService: ResourceService, private router:Router){}
  
  ngOnInit(): void {
    this.timeOffs$ = this.resourceService.listTimeOffRequest("timeOffRequests/pending");
    this.timeOffs$.subscribe(
        ()=> console.log,
        ()=> this.dataState = DataState.ERROR,
        ()=> this.dataState = DataState.COMPLETE
    )
  }

  onChangeStatus(action: string, id: number) {
    this.resourceService.findTimeOffRequest(`timeOffRequests/${id}`).subscribe(
      (data) => {
        const updatedData = data;
        if (action === "ACCEPTED") {
          updatedData.requestStatus = RequestTimeOffStatus.ACCEPTED;
        } else {
          updatedData.requestStatus = RequestTimeOffStatus.REJECTED;
        }
        
        this.resourceService.updateTimeOffRequest(updatedData).subscribe(
          (response) => {
            console.log(response);
            this.router.navigateByUrl(this.router.url); // Réactualiser la page en naviguant vers la même URL
          },
          (error) => {
            console.log(error);
          },
          () => {
            console.log("completée !");
          }
        );
      },
      (error) => console.log(error),
      () => window.location.reload()
    );
  }
  

  pageChanged(event: number){
    window.scrollTo(0,200);
    this.currentPage=event;
  }
}
