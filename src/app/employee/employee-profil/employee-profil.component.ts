import { Component, OnInit ,Input} from '@angular/core';
import { DataState } from 'src/app/enumeration/DataState.enum';
import { Employee } from 'src/app/models/Employee.model';
import { HumanService } from 'src/app/services/human.service';

@Component({
  selector: 'app-employee-profil',
  templateUrl: './employee-profil.component.html',
  styleUrls: ['./employee-profil.component.css']
})
export class EmployeeProfilComponent implements OnInit{

  constructor(private humanService : HumanService){}
  
  @Input() employee?: Employee;
  dataState:DataState = DataState.LOADING
  ngOnInit(): void {
    this.humanService.selectedEmployee$.subscribe(
      (selectedEmployee)=>this.employee = selectedEmployee,
      ()=>this.dataState = DataState.ERROR,
      ()=> this.dataState = DataState.COMPLETE
    )
  }
}
