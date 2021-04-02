# Angular

# Module
- Angular has its own modularity system called module or NgModule
- Every angular app must have at least one module, the root module name as AppModule
- An Angular module is a class with an @NgModule decorator
- Angular also has built in library modules starting with @angular prefix
- Built In library can be installed using npm 
- A decorator function that takes a single metadata object whose properties describe the module
- The main properties
> imports
> declarations
> bootstrap
> exports
> providers

> imports - specify the other dependent modules whose exported classes are required by the component templates declared in the module
> declaration - specify the view classes - component, directives and pipes that belong to the module
> bootstrap - specify the main app view ie root component. Only the root module can have this bootstrap property
> exports - A subset of declaration that will be visible and usable I the component template of the other module
> providers - specify the main app services that are accessbile in all parts of the app


# Component
- A reusable UI segment visible to the end user
- Used to specify html elements and logic for user interaction

# decorator
- A function that adds metadata to a class
- these are prefix with @ symbol
- Angular has built in decorator like @component for defining component


# type of decorator
@component - used for defining component
@directive - used for defining a directive
@NgModule - used for defining module
@pipe - used for defining pipe
@injectable - used for defining services / dependencies


# metadata
- tells angular how to process a class
- template, metadata and component together specify a view


# Every component consist of 4 files
1. Component.html -> html 
2. Component.css -> styling for that particular component
3. Component.ts -> main typescript code or logical statement for the component
4. Component.spec.ts -> contain unit tested related code for that component


Template - view/html
Class - typescript code, data and methods
Metadata - information decorartor



> ng generate component <component_name>
> ng g c <component_name>

> ng g c home
Will create a directory first
Inside the directory we have all 4 or relevant file for that particular component
.html
.css
.spec.ts
.ts

Update the app.module.ts file










