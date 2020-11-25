import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCoursesComponent } from './Pages/choose-courses/choose-courses.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { NewScheduleComponent } from './Pages/new-schedule/new-schedule.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { SchedulesViewComponent } from './Pages/schedules-view/schedules-view.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { ViewReviewComponent } from './Pages/view-review/view-review.component';
import { WriteReviewComponent } from './Pages/write-review/write-review.component';

const routes: Routes = [

  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: 'landing', component: LandingPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'user/schedules', component: SchedulesViewComponent},
  { path: 'user/schedules/new-schedule', component: NewScheduleComponent},
  { path: 'user/schedules/:schedule_name', component: SchedulesViewComponent},
  { path: 'user/schedules/:schedule_name/addcourses', component: ChooseCoursesComponent},
  { path: 'user/schedules/:schedule_name/:course_name/write-review', component: WriteReviewComponent},
  { path: 'public/viewreviews', component: ViewReviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
