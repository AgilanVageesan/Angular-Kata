import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

 @Input() 
 public childName;

 @Output()
 public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.childEvent.emit("Data from Test Component");
  }

}
