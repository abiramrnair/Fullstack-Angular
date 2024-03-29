import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { RegisterPageComponent } from './Pages/register-page/register-page.component';
import { UserDashboardComponent } from './Pages/user-dashboard/user-dashboard.component';
import { WebrequestinterceptorService } from './webrequestinterceptor.service';
import { ChooseCoursesComponent } from './Pages/choose-courses/choose-courses.component';
import { NewScheduleComponent } from './Pages/new-schedule/new-schedule.component';
import { SchedulesViewComponent } from './Pages/schedules-view/schedules-view.component';
import { WriteReviewComponent } from './Pages/write-review/write-review.component';
import { ViewReviewComponent } from './Pages/view-review/view-review.component';
import { PublicSchedulesViewComponent } from './Pages/public-schedules-view/public-schedules-view.component';
import { PublicChooseCoursesComponent } from './Pages/public-choose-courses/public-choose-courses.component';
import { PublicNewScheduleComponent } from './Pages/public-new-schedule/public-new-schedule.component';
import { AdminDashboardComponent } from './Pages/admin-dashboard/admin-dashboard.component';
import { AdminUsersettingsComponent } from './Pages/admin-usersettings/admin-usersettings.component';
import { AdminReviewsettingsComponent } from './Pages/admin-reviewsettings/admin-reviewsettings.component';
import { VerificationAckComponent } from './Pages/verification-ack/verification-ack.component';
import { UserSettingsComponent } from './Pages/user-settings/user-settings.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { matExpansionAnimations, MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { EditScheduleComponent } from './Pages/edit-schedule/edit-schedule.component';
import { AdminPolicyEditComponent } from './Pages/admin-policy-edit/admin-policy-edit.component';
import { PoliciesComponent } from './Pages/policies/policies.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    UserDashboardComponent,
    ChooseCoursesComponent,
    NewScheduleComponent,
    SchedulesViewComponent,
    WriteReviewComponent,
    ViewReviewComponent,
    PublicSchedulesViewComponent,
    PublicChooseCoursesComponent,
    PublicNewScheduleComponent,
    AdminDashboardComponent,
    AdminUsersettingsComponent,
    AdminReviewsettingsComponent,
    VerificationAckComponent,
    UserSettingsComponent,
    EditScheduleComponent,    
    AdminPolicyEditComponent, PoliciesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatDialogModule   
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: WebrequestinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

