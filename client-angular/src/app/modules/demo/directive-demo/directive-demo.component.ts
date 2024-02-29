import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
})
export class DirectiveDemoComponent implements OnInit {
  tasks: string[] = ["task1", "task2", "task3","task4"]
  isActive:boolean = true
  x: string = "b"
  id: number = 1
  constructor(){}
  
  ngOnInit(): void {
    
  }

}
