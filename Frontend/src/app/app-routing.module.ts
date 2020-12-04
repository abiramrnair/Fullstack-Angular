import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { AdminPolicyEditComponent } from './Pages/admin-policy-edit/admin-policy-edit.component';
import { AdminReviewsettingsComponent } from './Pages/admin-reviewsettings/admin-reviewsettings.component';
import { AdminUsersettingsComponent } from './Pages/admin-usersettings/admin-usersettings.component';
import { ChooseCoursesComponent } from './Pages/choose-courses/choose-courses.component';
import { EditScheduleComponent } from './Pages/edit-schedule/edit-schedule.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { NewScheduleComponent } from './Pages/new-schedule/new-schedule.component';
import { PoliciesComponent } from './Pages/policies/policies.component';
import { PublicChooseCoursesComponent } from './Pages/public-choose-courses/public-choose-courses.component';
import { PublicNewScheduleComponent } from './Pages/public-new-schedule/public-new-schedule.component';
import { PublicSchedulesViewComponent } from './Pages/public-schedules-view/public-schedules-view.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { SchedulesViewComponent } from './Pages/schedules-view/schedules-view.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { UserSettingsComponent } from './Pages/user-settings/user-settings.component';
import { VerificationAckComponent } from './Pages/verification-ack/verification-ack.component';
import { ViewReviewComponent } from './Pages/view-review/view-review.component';
import { WriteReviewComponent } from './Pages/write-review/write-review.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full'},  
  { path: 'landing', component: LandingPageComponent},
  { path: 'policies', component: PoliciesComponent},  
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'verified', component: VerificationAckComponent},
  { path: 'dashboard', component: UserDashboardComponent},
  { path: 'dashboard/usersettings', component: UserSettingsComponent},
  { path: 'user/schedules', component: SchedulesViewComponent},
  { path: 'user/schedules/new-schedule', component: NewScheduleComponent},
  { path: 'user/schedules/:schedule_name', component: SchedulesViewComponent},
  { path: 'user/schedules/:schedule_name/edit', component: EditScheduleComponent},
  { path: 'user/schedules/:schedule_name/addcourses', component: ChooseCoursesComponent},
  { path: 'user/schedules/:schedule_name/:course_name/write-review', component: WriteReviewComponent},
  { path: 'public/viewreviews', component: ViewReviewComponent},
  { path: 'public/schedules', component: PublicSchedulesViewComponent},
  { path: 'public/schedules/new-schedule', component: PublicNewScheduleComponent},
  { path: 'public/schedules/viewcourses', component: PublicChooseCoursesComponent},
  { path: 'public/schedules/:owner/:schedule_name', component: PublicSchedulesViewComponent},
  { path: 'admin/dashboard', component: AdminDashboardComponent},
  { path: 'admin/dashboard/usersettings', component: AdminUsersettingsComponent},
  { path: 'admin/dashboard/reviewsettings', component: AdminReviewsettingsComponent},
  { path: 'admin/dashboard/policyedit', component: AdminPolicyEditComponent},
  { path: '**', redirectTo: '/landing', pathMatch: 'full'},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
