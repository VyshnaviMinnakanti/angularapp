import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp'; //

  students = ["1", "2"];

  colorName = "blue";

  className ="redWhiteClass"

  onClick(){
    console.log("Event Binding");
    let name : string = "test" //string
    let number : Number = 3 //string
    let bool : boolean = true //boolean

    let array : Number[] = [1,2,3] //array

    //tuple
    let x :[string, Number];

  }
}
