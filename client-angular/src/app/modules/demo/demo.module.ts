import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaskListComponent } from "./task-list/task-list.component";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";
import { ParentLifeComponent } from "./Life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./Life-cycle-demo/child-life/child-life.component";
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { DemoRoutingModule } from "./demo-routing.module";
import { HighlightDirective } from "./directive-demo/highlight.directive";
import { DirectionClassDirective } from './directive-demo/direction-class.directive';

@NgModule({
    declarations:[HighlightDirective, TaskListComponent,ObservableDemoComponent,ParentLifeComponent, ChildLifeComponent, DirectiveDemoComponent, DirectionClassDirective],
    imports:[CommonModule, DemoRoutingModule],
    exports:[TaskListComponent,ObservableDemoComponent,ParentLifeComponent]
})

export class DemoModule{

}