import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public topics = ['HTML', 'CSS', 'Angular'];

  public hasError = false;

  userModel = new User("Mark", "", 9999, "", "", false);

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
   
    console.log(this.userModel);
  }

}
