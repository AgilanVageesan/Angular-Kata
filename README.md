# Angular

AngularJS or ver 1
Angular 2/4/5/6/7...10


# Angular
- One Framework for building mobile and web application
- Not an update to AnhularJS or 1.x, sivce scope, controller, service and factory are 
  not available in angular 2 and above
- Written in TypeScript
- Simple and expressive
- Web components based architecture
- Hierarchical dependency injection



Anguar 2.x and AngularJS 1.x

Angular 2.x and above
- Bootstrap function is used to initialze
- Support Pipes
- support camelCase syntex ngModel, ngClass
- uses HTML DOM element properties and events
- uses () for event and [] for property binding


AngularJs or 1.x
- ng-app is used to initialize
- support filters
- support spinal case syntex like ng-model, ng-class
- Uses it own directives like ng-click, ng-show
- does support () and [] based syntex for event amnd property binding


# Building Block od Angular
- Modules
- Components
- Templates
- Decorators
- Metadata
- directives
- pipes
- Routing
- Forms
- Services


# Angular CLI
A powerfull  tool to crete, build, compile and serve angular application
It is used to generate new compomnents, services, module in angular application

> npm install -g @angular/cli
> ng --version

> ng new <project_name>
> cd <project_name>
> code .
> ng serve  Or > ng s   Or  > ng s -o


# Angular Project Structure
> package.json - contains the packages to build and run our angular application
                 It contain list of all dependencies and devDependecies
                 Dependencies which we require to run the angular app these dependencies we 		  
                 require while deploying the app in production server
                 DevDependencies means development dependencies which mean these are the 
                 Dependencies which we require while developing app

> node_modules - packages specified in the package.json file are installed into this folder

> e2e folder - contains end to end tests and their configuration files

> editorconfig - configuration file for VS Code

> .gitignore - files and folders listed in the file are ignored when you upload into source code repository

> angular.json - this file can be consider as angular application level configuration file

> karma.conf.js - karma is a test running which will be using while unit testing and this file contain all karma configuration

> readme.md - remade file which contain the commonly used angular cli command or any other instruction for develop team

> tsconfig.app.json - typescript compiler configuration for the angular app

> tsconfig.spec.json - typescript compiler configuration for the unit test

> tslint.json - configuration file for listing

> src - contain the angular project source code

> assets - contain the assets of the application like images and any static files

> environments - contain the development and production environment file

> favicon - favourite icon for the application this icon will appear on browser tab

> index.html- in the only html file or page which get served on the browser

> main.ts - the main.ts is the entry point for the angular application this file contain the code to bootstrap the application root module

> style.css - this is a kind of global css file any project styling if we want to add this is the file where we can do so

> test.ts - main entry point for the unit testing

> app - one of the most important and mostly we will work with this folder only
        It will contain all the modules, component, pipes, service s etc
        This folder contain the main source code or the file which we will create when we are 
        developing the angular application


Every angular app should have at least one root module and one root component


Main.ts------> AppModule---------> AppComponent----------> app component html-----> index.html














