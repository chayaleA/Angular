import { Component, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DirectiveDemoComponent } from "./directive-demo/directive-demo.component";
import { DirectionClassDirective } from "./directive-demo/direction-class.directive";

@NgModule({
    imports: [RouterModule.forChild([
        { path: "directives", component: DirectiveDemoComponent},
        { path: "directives2", component: DirectionClassDirective }
    ])],
    exports: [RouterModule]
})
export class DemoRoutingModule{

}