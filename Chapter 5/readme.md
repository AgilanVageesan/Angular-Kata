# Angular

# Services

# why to use services
1. Services can be use to share common data across the application or between multiple components
2. We can write business logic in the services
3. We can use services for any kind of external communication or for making any API calls


> ng g s <service>

DRY - do not repeat yourself
Single class Responsibility


Steps
> define service
> register service
> consume service


# Dependency Injection

// code without DI framework
class Tyre{

}

class Engine{

}


class Car{

    engine;
    tyre;

    constructor(){
        this.engine = new Engine();
        this.tyre = new Tyre();     
    }

}

Dependency Injection
It is a design pattern in which a class receives its dependencies from external sources rather then creating them self


// code with DI pattern
class Tyre{

}

class Engine{
    constructor(type){

    }
}

class Car{
    engine;
    tyre;

    constructor(engine, tyre){
        this.engine = engine;
        this.tyre = tyre;
    }
}

Class Seat{
	constuctor(color, fabric, price){
	}
}


Angular has it own inbuilt DI called injectable


Register a service means to decide what level of exposure you want to give to your service
If we register with AppModule then the entire app can be access or consume that service
If we register with AppComponent only app comp and Childers of app comp can able to access the service


There are two we can register a service
1. Providers block

	@Injectable({
  providedIn: 'root'
})

2. Injectable decorator -> new feature came in new version angual


There are 4 Http verbs we can use to make a request
Get - reading
Post - inserting
Put  - update
Delete - deleting


# Promises Vs Observable
Promises emit a single data  and observable emit stream of data

Observable
> A sequence of item that arrive asynchronously over time


RxJS
- Reactive extension for javascript
- External library use to work with Observable















