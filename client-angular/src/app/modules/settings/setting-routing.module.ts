import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { AcountComponent } from "./account/acount.component";

const SETTING_ROUTES: Route[] = [
    { path: "", redirectTo: "profile", pathMatch: "full" },
    { path: "profile", component: ProfileComponent },
    { path: "favorites", component: FavoritesComponent },
    { path: "account", component: AcountComponent },
]

@NgModule({
    imports: [RouterModule.forChild(SETTING_ROUTES)],
    exports: [RouterModule]
}
)
export class SettingRouting {

}