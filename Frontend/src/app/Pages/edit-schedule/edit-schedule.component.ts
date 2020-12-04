import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ScheduleService } from 'src/app/schedule.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  schedule: string;

  constructor(private scheduleService: ScheduleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.schedule = params.schedule_name;
        console.log(this.schedule)
      }
    )
  }

  editScheduleButton(schedule_name: string, schedule_description: string) {
    let answer = confirm('Save Changes?');

    if (answer == true) {
      this.scheduleService.editPrivateSchedule(this.schedule, schedule_name, schedule_description).subscribe((items: any) => {        
      });
      this.router.navigate(['user/schedules']);
    }
    else if (answer == false) {
      this.router.navigate(['user/schedules', this.schedule, '/edit']);
    }
  }
}
