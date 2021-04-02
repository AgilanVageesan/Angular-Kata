import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
 
  <h1>{{ name }}</h1>
  <input type="text" [(ngModel)]="name" />
  <br>
  <textarea [(ngModel)]="message"></textarea>
  <p>{{ message.length }}</p>
  

  `,
 styles: [``]
})
export class TestComponent implements OnInit {

  public name = 'Mark smith';
  public message;

  constructor() { }

  ngOnInit(): void {
  }


}
