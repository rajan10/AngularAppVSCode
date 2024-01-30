import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // cities: string[]=["Kathmandu","Toronto","New York"]; 

  // 1 one way to instance
  // instance of the Employee class which is employee(var) is created in the constructor
  // employee: Employee;
  // constructor(){
  // this.employee = new Employee(1,"Rajan",10000);

  // 2 way to instances 
 employee = new Employee(1,"Rajan",10000);

 // 3 way to instances
 // employee var of type Employee
 // employee: Employee= new Employee(1,"Rajan",10000);

// 4 way to instances
//  employee: Employee;
//   ngOnInit() {
//     // // Initializing in ngOnInit lifecycle hook
//     this.employee = new Employee(1, 'John Doe', 50000);

// list of employee objects creation
employees:Employee[]= [new Employee(101,"John",5000), 
                       new Employee(102,"Jane",6000), 
                       new Employee(103,"Jack",7000)
                      ];
  }
    
  



