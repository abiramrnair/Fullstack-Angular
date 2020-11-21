import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private webReqService: WebRequestService, private authentication: AuthenticationService) { }

  createSchedule(name: string, description: string) {
    return this.webReqService.createSchedule(name, description);
  }

  getSchedules() {
    return this.webReqService.get('api/private/schedules/listmyschedules');
  }

  getScheduleItems(schedule_id: string) {
    return this.webReqService.get(`api/private/schedules/load/${schedule_id}`);    
  }

  deleteAllSchedules() {
    return this.webReqService.delete('api/private/schedules/deleteall');
  }

  deletethisSchedule(schedule_id: string) {
    return this.webReqService.delete(`api/private/schedules/deleteschedule/${schedule_id}`);
  }
}
