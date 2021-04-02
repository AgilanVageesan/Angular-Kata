import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1 class="text-success text-special">Welcom Guest</h1>
  <h1 [class]="successClass">Some Heading</h1>
  <h1 [class.text-danger]="hasError">Some Other Heading</h1>
  <h1 [class.text-special]="isSpecial">Some Heading 2</h1>
  <h1 [ngClass]="messageClasses">Some Message</h1>
  <h1 [class.text-center]="isCenter">Some Important Heading<h1>

  `,
 styles: [`
  .text-success{
    color: green
  }
  .text-danger{
    color: red
  }
  .text-special{
    font-style: italic;
  }
 `]
})
export class TestComponent implements OnInit {

  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = false;
  public isCenter = true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }


}
