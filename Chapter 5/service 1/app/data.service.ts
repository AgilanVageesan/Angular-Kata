import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getEmployees(){
    return [
      { code: 101, name: "mark", gender: "male" },
      { code: 102, name: "paul", gender: "male" },
      { code: 103, name: "watson", gender: "male" },
      { code: 104, name: "stacy", gender: "female" }
  ];
  }
}
