import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContractStatus } from 'src/app/enumeration/ContractStatus.enum';
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
  employeeHired:any = {};

  constructor(
    private humanService:HumanService,
    private resourceService:ResourceService,
    private router:Router
  ){}

  ngOnInit(): void {
  
  }

  public onSubmit(form:NgForm){
    this.contract.remuneration = form.value.remuneration;
    this.contract.start = form.value.start;
    this.contract.type = form.value.type
    if(form.value.type != 'CDI')
      this.contract.end = form.value.end;
    this.contract.status = ContractStatus.ACTIVE
    this.contract.HumanResourceManagerID = 1

    this.humanService.saveEmployee().subscribe((data)=>this.employeeHired = data)
    this.contract.employeeID = this.employeeHired.id;
    this.resourceService.saveContract(this.contract);
    this.router.navigate(['/dashboard']);
  }

}
