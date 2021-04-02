# Forms

# Reactive Forms or Model Driven Forms

Are the advance version of the forms where most of the code we write in the component class
In the Template Driven Form we write most of the code in template or HTML but in case of reactive forms we write minimal code in html and logical things come form component class

One of the most advantage of reactive is unit testing is very easy in reactive forms


LoginForm


FormGroup

{
Username - FormControl
Password - FormControl
}


# Routing
Routing is also very essential form any application
With the help routing user can navigate or explore our application
We can have navigation bar which allow the user to navigate to different pages

In angular we can create single page application where we can change the content or the component by changing the url

We will routing as a separate module which contain all logic of routing

There are two way we can create routing
1. Either when we creating a new project using angular cli it prompt and ask for routing option 
2. Later we can crate a routing module manually


Steps:
1. Create AppRoutingModule class 
2. Import RouterModule, Routes from the @angular/router
3. Define the routes
4. Register AppRoutingModule in the AppModule
5. In the root component add router-outlet


Router-outlet
routerLink
Wildcard route

----------
Important:
----------
Wild card route should be the last route of your routes array as angular routing will read the routes array from top to the bottom and try to match path one by one and if we have will card route as the first route it get matched with all path


We can also send some data or value in the url which is know as routeParameter or query string

www.abc.com/user?id=1

www.facebook.com/profile?id=100 - query string
www.abc.com/profile/1 --- routeParamter










