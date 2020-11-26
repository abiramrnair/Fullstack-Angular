import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from 'src/app/schedule.service';

@Component({
  selector: 'app-public-new-schedule',
  templateUrl: './public-new-schedule.component.html',
  styleUrls: ['./public-new-schedule.component.css']
})
export class PublicNewScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addScheduleButton(schedule_name: string) {
    this.scheduleService.createPublicSchedule(schedule_name).subscribe((response: any) => {
      this.router.navigate(['public/schedules/', response.name]);      
    })
  }
}
