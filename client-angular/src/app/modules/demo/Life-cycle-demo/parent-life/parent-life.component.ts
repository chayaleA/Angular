import { Component, Input, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-parent-life',
  templateUrl: './parent-life.component.html',
})
export class ParentLifeComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input()
  x: number = 5;

  constructor() {
    console.log("I am ctor, x: " + this.x);
  }

  ngOnInit(): void {
    console.log("I am component init, x: " + this.x);
  }
  ngOnChanges() {
    console.log("I am ngOnChanges, x: " + this.x);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit - I am called after my children init");
  }

  ngOnDestroy(): void {
    console.log("I am ngOnDestroy - called before it is going to destroy");
  }
}
