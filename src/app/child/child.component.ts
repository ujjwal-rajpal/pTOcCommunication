import { Component, 
  OnInit, 
  OnChanges,
  Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Define a custom property
//  @Input() Custom_Property : {
//     name : string,
//     content : string
//   }

// allias the property name
@Input('myproperty') Custom_Property : {
      name : string,
      content : string
    }
    change:number=0;
  constructor() { }

  ngOnInit() {
  }
// ngonchages called after each @input call
ngOnChanges(){
  console.log(++this.change);
  }
}
