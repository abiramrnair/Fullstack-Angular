import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private webReqService: WebRequestService) { }

  createSchedule(name: string) {
    return this.webReqService.put('api/schedules/createschedule?name=' + name);
  }

  getSchedules() {
    return this.webReqService.get('api/schedules/dropdown');
  }

  getScheduleItems(schedule_id: string) {
    return this.webReqService.get(`api/schedules/load/${schedule_id}`);    
  }

  deleteAllSchedules() {
    return this.webReqService.delete('api/schedules/delete_all');
  }

  deletethisSchedule(schedule_id: string) {
    return this.webReqService.delete(`api/schedules/delete?schedule=${schedule_id}`);
  }
}
