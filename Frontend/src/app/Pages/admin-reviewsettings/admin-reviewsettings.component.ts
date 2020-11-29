import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-admin-reviewsettings',
  templateUrl: './admin-reviewsettings.component.html',
  styleUrls: ['./admin-reviewsettings.component.css']
})
export class AdminReviewsettingsComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) { }

  reviews: any[];
  size: any;

  ngOnInit(): void {

        this.courseService.getAllCourseReviews().subscribe((items: any) => {
            this.reviews = items;

            if (this.reviews.length > 0) {
              this.size = this.reviews.length;
            }            
        })
  }

  toggleReviewVisibilityButton(review_id: string) {
      this.courseService.toggleReviewVisibility(review_id).subscribe((items: any) => {
        this.router.navigate(['/admin/dashboard/reviewsettings']);                  
      })
  }

}
