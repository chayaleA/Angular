import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { StudentsModule } from "./modules/students/students.module";
import { DemoModule } from "./modules/demo/demo.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent],
    imports: [StudentsModule,DemoModule, AppRoutingModule],
    bootstrap: [AppComponent]
})

export class AppModule {
   
}