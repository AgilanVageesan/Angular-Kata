import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
    <h2>ngSwitch</h2>

  <div [ngSwitch]="numberInDigit">
    <h1 *ngSwitchCase="1">One</h1>
    <h1 *ngSwitchCase="2">Two</h1>
    <h1 *ngSwitchCase="3">Three</h1>
    <h1 *ngSwitchDefault>Not on the list</h1>
  </div>

  <div [ngSwitch]="numberInWord">
    <h1 *ngSwitchCase="'One'">1</h1>
    <h1 *ngSwitchCase="'Two'">2</h1>
    <h1 *ngSwitchCase="'Three'">3</h1>
    <h1 *ngSwitchDefault>Invalid selection</h1>
  </div>

  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public numberInDigit = 10;

  public numberInWord = 'Four';

  constructor() { }

  ngOnInit(): void {
  }

}
