
// this is the ROOT MODULE of the application
// the root module (AppModule) is the configuration and organization center of the Angular application, specifying how the app 
// should be assembled
//import necessary modules
//u import this to bring in 'NgModule' decorator (used below) and related symbols from @angular/core module
//Angular decorators (like NgModule, Component, Directive, etc.) and other Angular symbols are defined in the @angular/core module
//The ngModel directive is part of the FormsModule, so make sure you have FormsModule imported in your Angular module (app.module.ts).
import { NgModule } from '@angular/core'; 

//importing 'BrowserModule' and 'FormsModule' from '@angular/platform-browser' and '@angular/forms' respectively
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//importing root component 'AppComponent' from './app.component'
import { AppComponent } from './app.component';


//use the imported symbols to define the AppModule class
@NgModule({
  declarations: [
    AppComponent,
    // other components, directives and pipes go here
  ],
  imports: [
    BrowserModule,FormsModule,
    // other modules go here
  ],
  providers: [], // services go here; it specifies the spervices that are available for injection into the component
  bootstrap: [AppComponent] //specify the root component for bootstrapping and so this decieds which component should be loaded first
})
export class AppModule { }
