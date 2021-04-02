import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selected = 'all';

  public employees = [];

  constructor() { 
    this.employees = [
      { code: "101", name:"Mark", gender: "Male" },
      { code: "102", name:"Stacy", gender: "Female" },
      { code: "103", name:"Steave", gender: "Male" },
      { code: "104", name:"Paul", gender: "Male" },
      { code: "105", name:"Smith", gender: "Male" },
      { code: "106", name:"Stone", gender: "Female" },
      { code: "107", name:"Orange", gender: "Female" },
    ]

  }

  getTotalEmployeeCount(): number{
    return this.employees.length;
  }

  getTotalMaleEmployeeCount():number{
    return this.employees.filter(e => e.gender=="Male").length;
  }

  getTotalFemaleEmployeeCount(): number{
    return this.employees.filter(e => e.gender=='Female').length;
  }

  onSelectionChanhged(selectetionValue){
    this.selected = selectetionValue;
  }

  ngOnInit(): void {
  }

}
