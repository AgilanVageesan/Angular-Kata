import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  <h1>{{ name | uppercase }}</h1>
  <h1>{{ name | titlecase }}</h1>
  <h1>{{ name | lowercase }}</h1>

  <h1>{{ message | slice: 3:5 }}</h1>
  <h1>{{ person | json }}</h1>
  
  <h1>{{ 5.678 | number: '1.2-3' }}</h1>
  <h1>{{ 5.678 | number: '3.4-5' }}</h1>
  <h1>{{ 5.678 | number: '3.1-2' }}</h1>

  <h1>{{ 0.50 | percent }}</h1>
  <h1>{{ 0.25 | currency }}</h1>
  <h1>{{ 0.25 | currency: 'GBP' }}</h1>
  <h1>{{ 0.25 | currency: 'INR' }}</h1>
  <h1>{{ 0.25 | currency: 'INR ': 'code' }}</h1>
  
  <h1>{{ date }}</h1>
  <h1>{{ date | date:'short' }}</h1>
  <h1>{{ date | date:'shortDate' }}</h1>
  <h1>{{ date | date:'shortTime' }}</h1>


  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public date = new Date();
  public name = 'some Name';
  public message = 'welcome to angular training';
  public person = {
    "firstName": "mark",
    "lastName": "smith",
    "gender": "male"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
