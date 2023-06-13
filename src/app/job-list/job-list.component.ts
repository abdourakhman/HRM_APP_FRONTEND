import { Component } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {

  jobs: any[] =[];
  constructor(){}

  ngOnInit(){
    this.jobs = [
      {name:'Développeur Java', description:"Concevez et développez des applications Java."},
      {name:'Data Analyst', description:"Analysez et interprétez des données pour des insights."},
      {name:'Comptable', description:"Gérez les opérations comptables et financières."}
    ]
  }
}
