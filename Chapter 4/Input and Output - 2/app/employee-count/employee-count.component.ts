import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  @Input()
  all: number;

  @Input()
  male: number;
  
  @Input()
  female: number;

  @Output()
  radioButtonCustomEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  radioButtonSelected = 'all';

  onRadioButtonChnaged(){
    console.log(this.radioButtonSelected);
    this.radioButtonCustomEvent.emit(this.radioButtonSelected);
  }

}
