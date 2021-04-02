import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getEmployees(){
    return [
      { code: "emp1", name: "Mark", gender: "Male" },
      { code: "emp2", name: "Paul", gender: "Male" },
      { code: "emp3", name: "Watson", gender: "Male" },
      { code: "emp4", name: "Smith", gender: "Male" },
      { code: "emp5", name: "Stacy", gender: "Male" },
    ];
  }
}
