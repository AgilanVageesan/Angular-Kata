import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>ngFor</h1>

  <ul *ngFor="let name of names">
    <li>{{ name }}</li>
  </ul>

  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public names = ['mark', 'smith', 'paul'];

  constructor() { }

  ngOnInit(): void {
  }

}
