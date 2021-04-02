import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DataService]
})
export class EmployeeListComponent implements OnInit {

  public employees = [];


  constructor(private data: DataService) { 
    this.employees = data.getEmployees();

  }

  ngOnInit(): void {
  }

}
