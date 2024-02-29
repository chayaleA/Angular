import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/students/components/home/home.component";
import { ListStudentsComponent } from "./modules/students/components/list-students/list-students.component";
import { StudentDetailsFormComponent } from "./modules/students/components/student-details-form/student-details-form.component";
import { PageNotFoundComponent } from "./modules/students/components/page-not-found/page-not-found.component";
import { AuthGuardService } from "./modules/students/services/auth-guard.service";
import { LoginComponent } from "./modules/settings/Login-f/login.component";
import { AuthGuard } from "./modules/settings/Login-f/auth-gurd";

const APP_ROUTES: Route[] = [
    { path: "", redirectTo: "home", pathMatch:  "full"},
    { path: "home", component: HomeComponent},
    { path: "students", component: ListStudentsComponent},
    { path: "students/:id", component: ListStudentsComponent},
    { path: "students_details", component: StudentDetailsFormComponent, canActivate: [AuthGuardService]},
    { path: "students_details/:id", component: StudentDetailsFormComponent},
    { path: "settings", loadChildren: ()=> import("./modules/settings/settings.module").then(m => m.SettingsModule)},
    // { path: "login", component: LoginComponent,  canActivate: [AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "demo", loadChildren: () => import("./modules/demo/demo.module").then(m => m.DemoModule)},
    { path: "**", component: PageNotFoundComponent}
]

@NgModule(
    {
        imports: [RouterModule.forRoot(APP_ROUTES)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule{

}