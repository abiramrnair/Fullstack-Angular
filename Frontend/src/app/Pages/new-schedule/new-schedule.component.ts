import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from 'src/app/schedule.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.css']
})
export class NewScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService, private router: Router) { }

  ngOnInit(): void {
  }

  addScheduleButton(schedule_name: string) {
    this.scheduleService.createSchedule(schedule_name).subscribe((response: any) => {
      this.router.navigate(['user/schedules', response.body.name]);
      console.log(response.body.name)
    })
  }
}
