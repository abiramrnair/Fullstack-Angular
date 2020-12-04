import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { CourseService } from 'src/app/course.service';
import { ScheduleService } from 'src/app/schedule.service';


@Component({
  selector: 'app-schedules-view',
  templateUrl: './schedules-view.component.html',
  styleUrls: ['./schedules-view.component.css']
})
export class SchedulesViewComponent implements OnInit {

  constructor(private scheduleService: ScheduleService, private route: ActivatedRoute, private router: Router, private authenticate: AuthenticationService, private courseService: CourseService) { }

  lists: any[];
  items: any[];
  schedule: string;
  schedule_size: any;
  size: any;
  course_title: string;
  flag: string;  
  time: string;
  information: any;
  description: string;

  ngOnInit(): void {   

    this.route.params.subscribe(
      (params: Params) => {
          this.scheduleService.getScheduleItems(params.schedule_name).subscribe((items: any) => {

              this.schedule = params.schedule_name; // Selected schedule                            
              
              if (!items) {
                  this.size = 0;
              }

              else {                                    
                  this.items = items.array_list;
                  this.description = items.description;
                  this.time = items.time;
                  this.schedule_size = 0;

                  if (this.items != null) {
                    this.schedule_size = 1;
                    this.size = this.items.length;
                  }

                  if (items.flag == "Private") {
                      this.flag = "Public";                      
                  } 
                  else if (items.flag == "Public") {
                      this.flag = "Private";
                  }                  
              }
          })          
      }
    )

    this.scheduleService.getSchedules().subscribe((lists: any[]) => {
        this.lists = lists;        
    })
  }

  deletethisSchedule() {
    let answer = confirm('Are you sure you want to delete this schedule?');

    if (answer == true) {
      return this.scheduleService.deletethisSchedule(this.schedule).subscribe((res: any) => {
        console.log(res);
      })
    }
    else if (answer == false) {
      this.router.navigate(['user/schedules', this.schedule]); 
    }
  }

  deleteAllSchedules() {
    let answer = confirm('Are you sure you want to delete all schedules?');

    if (answer == true) {
      return this.scheduleService.deleteAllSchedules().subscribe((res: any) => {
        this.router.navigate(['user/schedules']);         
      })
    }
    else if (answer == false) {
      this.router.navigate(['user/schedules', this.schedule]); 
    }
  }

  deleteCourseButton(course_name: string, subject_code: string, course_code: string) { // Delete course method with confirmation
    let answer = confirm('Are you sure you want to delete the course?');
    
    if (answer == true) {
      return this.courseService.deleteCourse(this.schedule, course_name, subject_code, course_code).subscribe((res: any) => {
        this.router.navigate(['user/schedules', this.schedule]);        
      })
    }    
    else if (answer == false) {
      this.router.navigate(['user/schedules', this.schedule]); 
    }
  }

  switchFlag() {
    return this.scheduleService.switchScheduleFlag(this.schedule).subscribe((res: any) => {
      this.router.navigate(['user/schedules', this.schedule]);      
    })
  }

  getCourseInformationButton(className: string, subjectcode: string, coursecode: string) {
    this.courseService.getCourseInformation(className, subjectcode, coursecode).subscribe((items: any) => {        
      this.information = items;                
  })
}
}
