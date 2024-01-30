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
 //employee = new Employee(1,"Rajan",10000);

 // 3 way to instances
 // employee var of type Employee
 // employee: Employee= new Employee(1,"Rajan",10000);

// 4 way to instances
//  employee: Employee;
//   ngOnInit() {
//     // // Initializing in ngOnInit lifecycle hook
//     this.employee = new Employee(1, 'John Doe', 50000);

// list of employee objects creation
// employees:Employee[]= [new Employee(101,"John",5000), 
//                        new Employee(102,"Jane",6000), 
//                        new Employee(103,"Jack",7000)
//                       ];
// newemployee: Employee= new Employee(0, "", 0);                  
  /**
   * Inserts a new employee into the employees array by pushing a new Employee instance.
   * Resets the newemployee properties after inserting. 
   * 
   * Deletes an employee from the employees array by splicing the array at the given index.
   * Confirms deletion with the user first.
  */
  // onInsertClick(){
 
  //   this.employees.push(new Employee(this.newemployee.empId, this.newemployee.empName, this.newemployee.salary));

  //   this.newemployee.empId=0;
  //   this.newemployee.empName="";
  //   this.newemployee.salary=0;
  // }
  //   onDeleteClick(n: any){
  //     if(confirm("Are you sure you want to delete this employee?")){
  //       this.employees.splice(n,1);
  //     }
  // }

  city:string ="Kathmandu";
  salary: number=10000;
  n:number=0.72;
  dt : Date= new Date();

  // we are creating an object person having structure firstName,lastName, age and assign values to it
person: {firstName:string,lastName:string,age:number} ={firstName:"Rajan",lastName:"Kumar",age:20};  //typescript notation


 
}


  
    
  



