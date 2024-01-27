import { Component } from '@angular/core';

// This is the root component of the application
// The root component serves as the starting point of the component tree. Other components are nested within or communicate 
// with the root component.
// It is the parent component of the other components 
// is the main building block, providing the initial template and acting as the top-level container for other components.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {// Component logics go here
  title = 'app3';
//declare the variables
  fname:string = "Adam";
  lname:string = "Smith";
  age:number=25;
  gender:string="Male";
  country:string="India";
  isEmployed:boolean=true;
 
  handleSubmitBtn(){

    //reinitialize
    this.fname = "Rajan";
    this.lname="Gau";
    this.age = 31;
    this.gender= "Male";
    this.country="USA";
    this.isEmployed=false;
  }
}
