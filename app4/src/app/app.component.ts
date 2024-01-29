import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app4';

  marks:number =20;
  b:boolean;

  constructor() {
    if(this.marks>=35){
      this.b = true;
    }else{
      this.b = false;
    }
   
  }
}
