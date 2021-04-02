# Angular

# Unit Testing

Unit testing means testing the smallest unit of the application
Unit testing we target to test thr function we have in the application


There are different type of testing we can do
1. Unit Testing
2. Integration Testing
3. End to end Testing


# End to end testing
In this type of testing we do the testing of the entire application as a whole each and every part of the application.
End to end testing is expensive and time consuming as we have test the entire application

# Integration testing
In this type of testing we test different part of the application together to make are they integrated well or not. In involve testing of more than one component / services / element together


# Unit testing
Unit Testing is all about validating the code or statement to make sure we are getting the output as per expectation
Unit testing is all about testing the smallest unit of the application
Unit testing is done in the isolation which means we want to test the logic written in the function body alone
In unit testing we test the method of the component indivulally


In Angular which tools we will use to perform unit testing
1. Testing framework where we will write uni test method - Jasmine
2. Test runner to execute or run the test method to give the result - Karma


Jasmine
Testing suit or framework where we going to write test case

Karma 
Test runner which will run out test cases and compile the result



Ng serve | ng s -o
This is command we use to run the application

Ng test
This is the command we use to run the test server

4200 - default port for application
9876 - default port for testing server


# Tripe A Rule
A - Arrange - arranging the resources or create an object of the class
A - Act - calling a function
A - Assert - comparison of the expected output


beforeAll()
beforeEach()
AfterAll()
AfterEach()


These are the method which will be called automatically before and after execution of the test methiods



beforeAll() - it is method which call once before the execution of any test method and we can use this method for initial setup or doing some ground work

beforeEach() - it is a method which call before the execution of every method

AfterAll() - it is a method which call once after the execution of any test method we can use this method for clear up process

afterEach() - it is method call after the execution of every method








TDD
Test Driven Development

We first write the test method and then write the application logic




Reference:

https://github.com/thevarungupta1/angular-grocery-app













 