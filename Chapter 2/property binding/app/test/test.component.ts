import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  

  <img src="{{ imagePath + imageName }}" width='100'/>

  <br>
  <button disabled>Button</button>

  <button disabled="{{isDisabled}}" >Button with interpolation</button>

  <button [disabled]="isDisabled">Button with Proprty Binding</button>




  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public imagePath = 'https://banner2.cleanpng.com/20180528/prw/';
  public imageName = 'kisspng-google-logo-google-search-console-google-adwords-google-5b0bbd3790af74.8119460015274959915926.jpg';

  public isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }


}
