# Communication between the components

@Output
@Input

These are the two decoration can be use to send data between the components
Note: These decorator can be use to share data only if there is a parent and child relation between the component

If the component does not have any parent and child relation or not nested then they cannot use these decorator for sharing data 

@Input - when parent component want to send data to the child component
@Output - when child component want to send data to the parent component

# Demo
1. @Input decorator to send data from AppComponent to TestComponent
2. Use Input and Output decorator to show in employee list 


# Services
A class with specific purpose can be service
Service are by default singleton classes which get instantiated when we start the application and then they can access across the application

Singleton - a single instance or any class which single object exist all the other classes can able to access single object only


# Why to use services
1. Sharing a common data across the application or amoug all the components
2. Implementing application or business logic
3. External interaction or consumes any third party RestAPI or web services

Naming convention.  -    .service.ts

> ng generate service <service name>
> ng g s <service name>


DRY - Do not repeat urself
SRP - single responsibility principal

 




