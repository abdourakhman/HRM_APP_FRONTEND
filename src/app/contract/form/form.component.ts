import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'highcharts';
import { ContractStatus } from 'src/app/enumeration/ContractStatus.enum';
import { Employee } from 'src/app/models/Employee.model';
import { HumanService } from 'src/app/services/human.service';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  selectedType?:string; 
  contract : any = {};
  employee:any = {};

  constructor(
    private humanService:HumanService,
    private resourceService:ResourceService,
    private router:Router
  ){}

  ngOnInit(): void {
  
  }

  public onSubmit(form:NgForm){
    this.contract.start = form.value.start;
    if(form.value.type != 'CDI')
      this.contract.end = form.value.end;
    else
    this.contract.end = null;
    this.contract.type = form.value.type
    this.contract.renumeration = form.value.remuneration;
    this.contract.status = ContractStatus.ACTIVE;
    this.contract.humanResourceManagerID = 1;

    this.humanService.saveEmployee();
    this.humanService.saveEmployee().subscribe(
      (data) => {
        this.employee = data;
        this.contract.employeeID = this.employee.id;
  
        // Appeler saveContract après avoir obtenu employeeID
        this.resourceService.saveContract(this.contract).subscribe(
          () => {
            console.log("Successfully saved contract!");
            this.router.navigate(['/dashboard']);
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
    }
}
