import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcountComponent } from './account/acount.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingRouting } from './setting-routing.module';

@NgModule({
  declarations: [
    AcountComponent,
    ProfileComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule, SettingRouting
  ]
})
export class SettingsModule { }
