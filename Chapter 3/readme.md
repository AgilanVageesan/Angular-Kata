# Structural Directive

These are the special directive used to add or remove the HTML

# ngIf
# ngSwitch
# ngFor


# ngIf
ngIf is used to add html dynamically
It is similar to the if and else conditional statement


# ngSwitch
ngSwitch is similar to the switch case we have in other programming language
When we expect some predictable output we can write them in switch case based on some condition any one the case get executed

# ngFor 
ngFor is similor to for loop we have in our other programming language
We can ngFor to iterate on the array and display the data in sequence
For example: we are reading a data from database which return an array using ngFor we can read the data one by one and display in table

Example: 1
<table class="table table-bordered">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Code</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let employee of employees; index as i; first as f; last as l; even as e; odd as o"  [class.highlight]="e">
                <td>{{ e }}</td>
                <td>{{ employee.code }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.gender }}</td>
                <td>{{ employee.salary }}</td>
            </tr>
        </tbody>
    </table>



ngFor also provide some more features which can use to get additional information

Index
First
Last
Even
odd


Note: There is serious issue with ngFor whenever we try to add or modify the data set 
    ngFor will tear and down and recreate the entire table just to accommodate a new row it will recreate the entire table and will be an performance hit

So we need to optimise bcoz if we are dealing with huge data set it will impact the perforce off our application for example in the commerce app we might having 1000 of products

trackBy
We can use trackBy feature of the ngFor which can be use to track the element by a specific key and if we found a new key then ngFor will just create a row for the key 


We can use empId or code or any unique column. Which contain unique value in the data set
In that ngFor we will create a row only for that row only

# pipe
One of the main building block for angular application

Pipes are use to transform the data before it get displayed
It will going to change the values but can be use for visualisation or for display

Syntax

{{ value | <name_of_pipe>:<parameter> }}

Pipes are very useful when we are not sure in which format data has been saved in that case we can use pipe for formatting content


We can also create a custom pipe based on our requirement if we don't inbuilt pipe to satisfy our requirement


To create a pipe
> ng g p <pipe_name>

Custom pipe
Will have to create a class which implement PipeTransform interface which has method transform which will contain the logic 
Need to decorate this class with @Pipe decorator
Need to register pipe with app.module.ts







