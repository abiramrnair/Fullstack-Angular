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
    PublicNewScheduleComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: WebrequestinterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
