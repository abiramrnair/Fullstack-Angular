import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {

  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }

  course_name: string;
  schedule_name: string;  

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
        this.course_name = params.course_name;
        this.schedule_name = params.schedule_name;            
    })
  }

  addReviewButton(review: string) {  
    let answer = confirm('This will be a public review. Are you sure you want to publish?');
      if (answer == true) {    
          this.courseService.addCourseReview(review, this.course_name).subscribe((res: HttpResponse<any>) => {
          console.log(res)
        })
      }
        else if (answer == false) {
          this.router.navigate([`user/schedules/${this.schedule_name}/${this.course_name}/write-review`]); 
      } 
  }
}
