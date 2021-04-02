import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 
  <input type="text" #myInput />
  <button (click)="onButtonClick(myInput)" >Send</button>

  `,
 styles: [``]
})
export class TestComponent implements OnInit {

  onButtonClick(input){
    console.log(input.value);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
