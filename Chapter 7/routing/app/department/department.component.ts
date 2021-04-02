import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments;

  constructor(private router: Router, private dataService: DataService) {
    this.departments = dataService.getDepartments();
   }

  onSelectedDepartment(department){
    this.router.navigate(['/department', department.departmentId])
  }

  ngOnInit(): void {
  }

}
