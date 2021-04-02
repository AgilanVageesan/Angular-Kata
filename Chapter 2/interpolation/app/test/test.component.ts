import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>Welcome {{ name }}</h1>
  <h1>{{ 10 + 20 }}</h1>
  <h1>{{ 'Hello ' + name }}</h1>
  <h1>{{ message.length }}<h1>
  <h1>{{ message.toUpperCase() }}</h1>
  <h1>{{ getFullName() }}</h1>

  <img src="{{ image }}" />


  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = 'Mark Smith';
  public message = 'Hello World';

  public firstName = 'Paul';
  public lastName = 'Watson';
  public image = 'https://banner2.cleanpng.com/20180528/prw/kisspng-google-logo-google-search-console-google-adwords-google-5b0bbd3790af74.8119460015274959915926.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  getFullName(){
    return this.firstName + ' '+ this.lastName;
  }

}
