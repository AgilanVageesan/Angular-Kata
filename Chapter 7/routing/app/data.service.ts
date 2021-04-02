import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  department = [
    { departmentId: 100, departmentName: 'admin'},
    { departmentId: 200, departmentName: 'sales'},
    { departmentId: 300, departmentName: 'IT'},
    { departmentId: 400, departmentName: 'HR'},
    { departmentId: 500, departmentName: 'Purchse'},
  ];

  addDeaprtment(department){
    this.department.push(department);
  }

  getDepartments(){
    return this.department;
  }

  getDepartmentById(id){
    return { departmentId: 100, departmentName: 'admin'}
  }
}
