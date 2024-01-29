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
  fname:string = "";
  lname:string = "";
  age:number=0;
  gender:string="";
  country:string="";
  isEmployed:boolean=false;
 
  handleSubmitBtn(){

    //reinitialize
    //console.log("Submit button submitted");
    this.fname ;
    this.lname;
    this.age;
    this.gender;
    this.country;
    this.isEmployed;
  }
}
