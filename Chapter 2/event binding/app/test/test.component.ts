import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  <h2>{{ message }}</h2>
  <button (click)="onButtonClick()">Button 1</button>
  <button (dblclick)="onButton2Click($event)">Button 2</button>

  <button (click)="onMessageChange()">Change Message</button>

  
  <button (click)="name='Watson'">Change Name</button>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message = 'Some message';
  public name = 'Guest';


  onButtonClick(){
    console.log('button cliked');
  }

  onButton2Click(e){
    console.log(e);
  }

  onMessageChange(){
    this.message = 'Some other message';
  }

  constructor() { }

  ngOnInit(): void {
  }


}
