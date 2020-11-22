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
  schedule_size: any;
  size: any;
  course_title: string;
  flag: string;  

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
          this.scheduleService.getScheduleItems(params.schedule_name).subscribe((items: any) => {

              this.schedule = params.schedule_name; // Selected schedule                            

              if (!items) {
                  this.size = 0;
              }

              else {                                    
                  this.items = items.array_list;
                  this.schedule_size = 0;

                  if (this.items != null) {
                    this.schedule_size = 1;
                    this.size = this.items.length;
                  }

                  if (items.flag == "Private") {
                      this.flag = "Public";                      
                  } 
                  else if (items.flag == "Public") {
                      this.flag = "Private";
                  }                  
              }
          })          
      }
    )

    this.scheduleService.getSchedules().subscribe((lists: any[]) => {
        this.lists = lists;        
    })
  }

  deletethisSchedule() {
      return this.scheduleService.deletethisSchedule(this.schedule).subscribe((res: any) => {
        console.log(res);
      })
  }

  deleteAllSchedules() {
    return this.scheduleService.deleteAllSchedules().subscribe((res: any) => {
        console.log(res);
    })
  }

  switchFlag() {
    return this.scheduleService.switchScheduleFlag(this.schedule).subscribe((res: any) => {
      this.router.navigate(['user/schedules', this.schedule])
      console.log(res);
    })
  }
}
