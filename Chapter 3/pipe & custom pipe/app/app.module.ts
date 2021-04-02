import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { TitlePipe } from './title.pipe';
import { EmpTitlePipe } from './emp-title.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    TitlePipe,
    EmpTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
