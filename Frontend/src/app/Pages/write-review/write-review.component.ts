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
      this.courseService.addCourseReview(review, this.course_name).subscribe((res: HttpResponse<any>) => {
        console.log(res)
      })
  }
}
