import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes = [
    
    { path: '' , redirectTo: '/employee', pathMatch: 'full'},
    { path: 'employee', component: EmployeeComponent},
    { path: 'department', component: DepartmentComponent},
    { path: 'department/:id', component: DepartmentDetailsComponent },
    { path: 'department/:id/:name', component: DepartmentDetailsComponent },
    { path: '**', component: PageNotFoundComponent },
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }