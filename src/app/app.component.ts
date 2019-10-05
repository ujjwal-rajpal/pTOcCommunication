import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pTOcCommunication';
  // creatte a variable 
  Custom_data :object;

  constructor(){
   // asign some value 
   this.Custom_data = {
    name : "ujjwal",
    content : "Parent to child communication"
  }
}



}
