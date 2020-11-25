import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterPreloader } from '@angular/router';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) { }

  reviews: any[];
  size: any;

  ngOnInit(): void {

        this.courseService.getCourseReviewPublic().subscribe((items: any) => {
            this.reviews = items;

            if (this.reviews.length > 0) {
              this.size = this.reviews.length;
            }
            console.log(this.reviews)
        })
  }
}
