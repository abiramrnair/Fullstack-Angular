import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ScheduleService } from 'src/app/schedule.service';


@Component({
  selector: 'app-schedules-view',
  templateUrl: './schedules-view.component.html',
  styleUrls: ['./schedules-view.component.css']
})
export class SchedulesViewComponent implements OnInit {

  constructor(private scheduleService: ScheduleService, private route: ActivatedRoute, private router: Router) { }

  lists: any[];
  items: any[];
  schedule: string;
  size: any;

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
          this.scheduleService.getScheduleItems(params.schedule_name).subscribe((items: any) => {

              this.schedule = params.schedule_name; // Selected schedule 
              
              if (!items) {
                  this.size = 0;
              }

              else {
                  this.items = items;
                  this.size = items.length;
              }
          })
      }
    )

    this.scheduleService.getSchedules().subscribe((lists: any[]) => {
        this.lists = lists;        
    })
  }

  deletethisSchedule() {

  }

  deleteAllSchedules() {

  }
  
}
