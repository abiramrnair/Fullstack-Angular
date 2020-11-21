import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CourseService } from 'src/app/course.service';


@Component({
  selector: 'app-choose-courses',
  templateUrl: './choose-courses.component.html',
  styleUrls: ['./choose-courses.component.css']
})

export class ChooseCoursesComponent implements OnInit {

  subjects: any[];
  courses: any[];
  schedule: string;
  doesExist: Boolean;
  size: any;

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.courseService.subjectDropDown().subscribe((items: any) => { // Dynamic drop down of available subject codes             
        this.subjects = items;        
    })

    this.route.params.subscribe(
      (params: Params) => {
        this.schedule = params.schedule_name; // this is where we load in which schedule we are adding to       
      }
    )
    
    this.size = -1;
  }
  
  listCourses(subject: string, course_number: string, course_cmpnt: string) { // user clicks search, gets list

    this.size = 0;

    this.courseService.listCourses(subject, course_number, course_cmpnt).subscribe((items: any) => {        
          
          this.courses = items;
          this.size = items.length;
                                        
    })          
  }

  addCourseButton(course_name: string, subject_code: string, course_code: string) { // user adds to given schedule

    this.courseService.doesCourseExist(this.schedule, course_name, course_code).subscribe((message: any) => {

      if (message.message == "Exists") {
          console.log("Course Already Exists In The Schedule")
      }

      else {
        return this.courseService.addCourse(this.schedule, course_name, subject_code, course_code).subscribe((message: any) => {
          console.log(message.body.message)
        })
      }
    })      
  }  
}