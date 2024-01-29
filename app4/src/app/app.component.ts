import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app4';

  marks:number =80;
  myclass:string="";

  constructor() {
    if(this.marks>=35){
      this.myclass = "class1";
    }else{
      this.myclass = "class2";
    }
   
  }
}
