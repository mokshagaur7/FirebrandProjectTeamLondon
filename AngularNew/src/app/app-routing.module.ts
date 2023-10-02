import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{path:'', children: [{path:'',component:HomeComponent},{path:'list',component:ListComponent}]},
{path:'login',component:LoginComponent},
{path:'profile',component:ProfileComponent},
{path:'settings',component:SettingsComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }