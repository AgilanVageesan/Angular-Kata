import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [
    {code: 'emp1', name: 'Mark', gender: 'Male', salary: 5000, dateOfBirth: '6/25/1980'},
    {code: 'emp2', name: 'Smith', gender: 'Male', salary: 8000, dateOfBirth: '9/9/1980'},
    {code: 'emp3', name: 'Stacy', gender: 'Female', salary: 12000, dateOfBirth: '2/24/1980'},
    {code: 'emp4', name: 'Watson', gender: 'Male', salary: 4500, dateOfBirth: '5/25/1980'},
    {code: 'emp5', name: 'Stone', gender: 'Female', salary: 5000, dateOfBirth: '12/12/1980'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
