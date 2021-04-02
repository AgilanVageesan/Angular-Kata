import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor() {
    this.employees = [
      { code: 100, name: "Mark", gender: "Male", salary: 5000 },
      { code: 200, name: "Paul", gender: "Male", salary: 5000 },
      { code: 300, name: "Smith", gender: "Male", salary: 5000 },
      { code: 400, name: "Watson", gender: "Male", salary: 5000 }
    ]
   }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.employees = [
      { code: 100, name: "Mark", gender: "Male", salary: 5000 },
      { code: 200, name: "Paul", gender: "Male", salary: 5000 },
      { code: 300, name: "Smith", gender: "Male", salary: 5000 },
      { code: 400, name: "Watson", gender: "Male", salary: 5000 },
      { code: 500, name: "Stacy", gender: "Female", salary: 5000 }
    ]
  }

  trackByEmployeeCode(employee: any): number{
      return employee.code;
  }

}
