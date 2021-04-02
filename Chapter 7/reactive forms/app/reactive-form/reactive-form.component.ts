import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // loginForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     pincode: new FormControl('')
  //   })
  // });

  onGetData(){
    // this.loginForm.setValue({
    //   username: 'Mark',
    //   password: '123',
    //   address: {
    //     city: 'city 1',
    //     state: 'state 1',
    //     pincode: '110001'
    //   }
    // })
  }

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.maxLength(6), Validators.minLength(3), Validators.required]],
    address: this.fb.group({
      city: [''],
      state: [''],
      pincode: ['']
    })
  })

  onFormSubmit(data){
    console.log(data);
  }


  ngOnInit(): void {
  }

}
