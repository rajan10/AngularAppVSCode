import {Component} from "@angular/core";

@Component({

    selector: "first",
    templateUrl : "./first.component.html"
})

export class FirstComponent {
 public sub: string ; 
 constructor(){
    this.sub= "angular Live Project Training";
 };

};
