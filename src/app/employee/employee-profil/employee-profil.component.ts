import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { Employee } from 'src/app/models/Employee.model';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-employee-profil',
  templateUrl: './employee-profil.component.html',
  styleUrls: ['./employee-profil.component.css']
})
export class EmployeeProfilComponent {

  constructor(private humanService : HumanService){}

  dataState: DataState = DataState.LOADING;
  employees$!: Observable<Employee[]>;

  ngOnInit(): void {
    this.employees$ = this.humanService.listEmployee();
      this.employees$.subscribe(
        ()=>console.log,
        ()=>this.dataState=DataState.ERROR,
        ()=>this.dataState=DataState.COMPLETE
      )
    
  }
}
