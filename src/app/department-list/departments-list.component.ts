import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentListComponent implements OnInit{

  departments: any[] = [];
  constructor(){}

  ngOnInit(): void {
      this.departments = [
        {name:"Informatique", description:"department informatique"},
        {name:"Finance", description:"department finance"},
        {name:"Maintenance", description:"department maintenance"},
      ];
  }

}
