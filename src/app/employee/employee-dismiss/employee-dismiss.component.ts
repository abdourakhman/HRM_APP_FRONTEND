import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContractStatus } from 'src/app/enumeration/ContractStatus.enum';
import { Contract } from 'src/app/models/Contract.model';
import { Employee } from 'src/app/models/Employee.model';
import { HumanService } from 'src/app/services/human.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-employee-dismiss',
  templateUrl: './employee-dismiss.component.html',
  styleUrls: ['./employee-dismiss.component.css']
})
export class EmployeeDismissComponent implements OnInit {

  employee?:Employee;
  registrationNumber?:string;
  contractsEmployee?:Contract[];
  constructor(
    private humanService:HumanService,
    private resourceService:ResourceService,
    private router:Router
  ){}

  ngOnInit(): void {
    
  }
  
  onFindEmployee(){
    this.humanService.getEmployeeByRegistration(this.registrationNumber).subscribe(
      (data)=>(this.employee=data),
      (error)=> console.log(error),
      ()=> {this.employee ? console.log('employee found !') : console.log("employee not found !")}
    )
  
  }

  onSubmit(form:NgForm){
    this.resourceService.findEmployeeContract(this.employee.id).subscribe(
      (data)=>{
        this.contractsEmployee =data;
        this.contractsEmployee[data.length -1].status = ContractStatus.REVOKED; 
        this.humanService.removeEmployee(this.employee.id);
        this.resourceService.deleteContract(this.contractsEmployee[data.length-1].id);
        this.router.navigate(['/dashboard']);
      },
      (error)=>console.log(error),
      ()=>("observable complétée !")
    )
  }
}
