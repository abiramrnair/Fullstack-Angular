import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCoursesComponent } from './Pages/choose-courses/choose-courses.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { NewScheduleComponent } from './Pages/new-schedule/new-schedule.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { SchedulesViewComponent } from './Pages/schedules-view/schedules-view.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'user/schedules', component: SchedulesViewComponent},
  { path: 'user/schedules/new-schedule', component: NewScheduleComponent},
  { path: 'user/schedules/choose-courses', component: ChooseCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
