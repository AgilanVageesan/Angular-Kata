# Angular 

# Angular Forms

> Form are important when we want to take input or data from the user
> Forms are essential part in any application as with the help of forms user can interact with our application

Template -> Class -> service -> server
Collect Data -> Bind Data -> Send Data -> save data

# We can create form in angular in two
1. Template driven forms (TDF)
2. Reactive forms or Model driven forms

TDF -> Heavy work is done on the component template (HTML)
Reactive -> Heavy work is done at component class (Typescript)


TDF vs Reactive Forms
1. TDF are east to use and similar to normal html we do or similar to angularJS 
2. In TDF two way data binding can be achieve with the help of ngModel
3. TDF are bulky in HTMNL and minimal component code
4. TDF automatically track the form and form elements state and validity
5. In TDF unit testing is challenging as we have to open the form in browser to provide inputs on the other hand unit testing is completely automated in reactive form
6. Readibiliy decreases with complex form and validation in TDF
7. TDF are suitable for simple scenarios where unit testing iOS also not required




# Steps
In order to work with forms we have to follow 5 simple steps
1. Add the Html in the component template
2. Binding data - either one way or two way data binding
3. Track state and validation
4. Display the error message or provide visual feedback
5. Submit the form data



# Track control state and validation


The control has been visited or not
The control value has been changed  or not
The control value is valid or invalid



Untouched - ng-untouched
Touched - ng-touched
Pristine - ng-pristine
Dirty - ng-dirty
Valid - ng-valid
invalid - ng-invalid



State				class if true			class if false
The control has been visited	ng-touched			ng-untouched
The control value has changed	ng-dirty			ng-pristine
The control value is valid	ng-valid			ng-invalid

















