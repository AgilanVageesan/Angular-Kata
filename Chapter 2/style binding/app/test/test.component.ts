import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 
  <h1 style="color: red">Some Heading</h1>

  <h1 [style.color]="hasError ? 'red': 'green'">Some Other Heading</h1>
  <h1 [style.color]="specialColor">Some User Prefered Colored Text</h1>
  <h1 style="text-align: center">Some Text</h1>
  <h1 [style.textAlign]="textCenter">Some Center Text</h1>
  <h1 [style.textAlign]="hasError ? 'center': 'right'">Some Center Text</h1>

  <h1 [ngStyle]="customStyle">Custom Styled Text</h1>

  `,
 styles: [``]
})
export class TestComponent implements OnInit {

  public hasError = true;
  public specialColor = '#999999';
  public textCenter = 'center';

  public customStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }


}
