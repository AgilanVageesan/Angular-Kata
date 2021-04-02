# Angular

# Data Binding

1. One Way Data Binding - data will flow from component class to the template
2. One Way Data Binding - data will flow from template to the component class
3. Two Way Data Binding - data will flow from component class to template and from template to component that is both direction


# One Way Data binding
Where data from component to template or we can send data from component to template
1. Interpolation - {{}}
2. Property Binding - []


# Interpolation - data binding
We can interpolation for data binding 
Data will from component class to the template or HTML
We can use interpolation for executing any expression
Like {{ 20 + 30 }}. // 50

In the interpolation we can use any javascript property and function
String.length
toUpprcase()

We can also use interpolation to call our own methods


# Property Binding
We can send data from component class to template 
We can pair of square bracket on the property which we want to bind
- [ <property_name> ]


# Interpolation Vs Property Binding
> Interpolation is a special syntax that angular convert into data binding
> To concatenate string we must use interpolation instead of property binding
  <img src="{{}}"/>
> To set an element property to a non string data value you must use property binding


# One Way Data binding 
Where data will flow from template to the component class
> Event Binding

Event binding can be use to send some data or information from template to the component class
Syntax - ()
We can write the name of the event which we want to bind inside ()


# Class Binding (css class)
Class binding is use to dynamically apply any css class on the html element
Use [] brackets for class binding
[ngClass] special directive to apply multiple classes

Example:
 <h1 class="text-success text-special">Welcom Guest</h1>
  <h1 [class]="successClass">Some Heading</h1>
  <h1 [class.text-danger]="hasError">Some Other Heading</h1>
  <h1 [class.text-special]="isSpecial">Some Heading 2</h1>
  <h1 [ngClass]="messageClasses">Some Message</h1>
  <h1 [class.text-center]="isCenter">Some Important Heading<h1>

.text-success{
    color: green
  }
  .text-danger{
    color: red
  }
  .text-special{
    font-style: italic;
  }


public successClass = 'text-success';
  public hasError = false;
  public isSpecial = false;
  public isCenter = true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  }


# style binding
Style binding is use when we want to apply any style dynamically
[ngStyle] special directive by angular to apply multiple styles


# two way data binding
When data is flowing in both direction
From component class to template and from template to component class

Class to html - property binding - []
Html to class - event binding - ()

Two way data binding - [()] - banana in box

For two way data binding we have to use ngModel and use ngModel we have to add
FormsModel from the @angular/form package


Example:

Step1:
import { FormsModule } from '@angular/forms';


Step2:
 imports: [
    BrowserModule,
    FormsModule
  ],

Step3:
public name = 'Mark smith';

Step4:
<h1>{{ name }}</h1>
  <input type="text" [(ngModel)]="name" />



# Template reference variable

Template reference variable as name suggest is use to give any reference variable to the element
So that we can find and use the porporties of thr element
To provide template reference variable we have use # and the name

<input type="text" #myInput />
  <button (click)="onButtonClick(myInput)" >Send</button>




  onButtonClick(input){
    console.log(input.value);
  }





https://angularjs.org


https://angular.io














