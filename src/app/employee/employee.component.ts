import { Component } from '@angular/core';
import { HumanService } from '../services/human.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private humanService:HumanService){}
  
  onIsEmployeeSelected(){
    return this.humanService.isEmployeeSelected()
  }
}
