import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  <h1 *ngIf="displayName">Hello from if</h1>
  <h1 *ngIf="!displayName">Hello from else</h1>

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
   <h1>This is if block using ngTemplate</h1>
  </ng-template>


  <ng-template #elseBlock>
  <h1>This is else block using ngTemplate</h1>
  </ng-template>
  

  <button *ngIf="!isLoggedIn" class="btn btn-primary">Login</button>
  <button *ngIf="isLoggedIn" class="btn btn-danger">Logout</button>

  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;
  public isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
