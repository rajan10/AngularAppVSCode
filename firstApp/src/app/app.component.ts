import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';

  public sub: string;
  constructor() {
    this.sub = "Angular Live Project Training";
  }
}
