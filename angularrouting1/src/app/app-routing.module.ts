import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomepageComponent}from './homepage/homepage.component';
import {LoginComponent}from './login/login.component';
import {LogoutComponent}from './logout/logout.component';
const routes: Routes = [
   { path: "login",
    component: LoginComponent
   },
   { path : "logout",
     component: LogoutComponent
   },
   {path : "home",
    component: HomepageComponent
   },
   {path : "dashboard",
    component: DashboardComponent
   },
   {
       path : "",
       redirectTo: "/login",
       pathMatch: "full"
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }