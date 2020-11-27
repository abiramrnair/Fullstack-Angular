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

  addScheduleButton(schedule_name: string, schedule_description: string) {

    this.scheduleService.doesPrivateScheduleExist(schedule_name).subscribe((response: any) => {

        if (response == "Schedule Exists") {
          console.log("Schedule Exists")
        }
        else {
          this.scheduleService.createSchedule(schedule_name, schedule_description).subscribe((response: any) => {
            this.router.navigate(['user/schedules', response.body.name]);            
          })
        }
    })    
  }  
}
