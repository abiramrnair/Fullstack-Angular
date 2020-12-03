import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-public-choose-courses',
  templateUrl: './public-choose-courses.component.html',
  styleUrls: ['./public-choose-courses.component.css']
})
export class PublicChooseCoursesComponent implements OnInit {

  subjects: any[];
  courses: any[];
  reviews: any[];
  schedule: string;
  doesExist: Boolean;
  size: any;
  coll: any;
  i: any;

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

  addPublicCourseButton(course_name: string, subject_code: string, course_code: string) { // user adds to given schedule

    this.courseService.doesCourseExist(this.schedule, course_name, course_code).subscribe((message: any) => {

      if (message.message == "Exists") {
          console.log("Course Already Exists In The Schedule")
      }

      else {
        return this.courseService.addPublicCourse(this.schedule, course_name, subject_code, course_code).subscribe((message: any) => {
          console.log(message.body.message)
        })
      }
    })      
  }
  
  softMatchSearchButton(search_string: string) { // softmatch search function gets value from textbox
    this.size = 0;
    this.courseService.softMatchListCourses(search_string).subscribe((items: any) => {
        if (items.message == "Invalid String") {
          this.size = -2;
        } else {       
          this.courses = items;
          this.size = items.length;
        }      
    })
  }

  getCourseReview(subject: string, catalog_number: string, classname: string) { // accessing mat expansion panel reveals review information
    const courseName = subject + ' ' + catalog_number + ' - ' + classname;
    this.courseService.getIndividualCourseReview(courseName).subscribe((items: any) => {
        this.reviews = items;        
    })
  }
}
