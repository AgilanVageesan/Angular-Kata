import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  public employees = [];


  constructor(private data: DataService) { 
    this.employees = data.getEmployees();
  }

  ngOnInit(): void {
  }

}
