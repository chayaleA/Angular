import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-child-life',
  templateUrl: './child-life.component.html',
})
export class ChildLifeComponent implements OnInit{

  constructor(){

  }
  
  ngOnInit(): void {
    console.log("I am child init")
  }

}
