import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';

const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
