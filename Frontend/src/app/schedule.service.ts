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

  createPublicSchedule(name: string) {
    return this.webReqService.put(`api/public/schedules/createschedule/${name}`)
  }

  getSchedules() { // Return userspecifc schedules
    return this.webReqService.get('api/private/schedules/listmyschedules');
  }

  getScheduleItems(schedule_id: string) { // Return items inside user's schedules
    return this.webReqService.get(`api/private/schedules/load/${schedule_id}`);    
  }

  getPublicSchedules() { // Return public schedules
    return this.webReqService.get(`api/public/schedules/dropdown`);
  }

  getPublicScheduleItems(schedule_owner: string, schedule_id: string) { // Return public schedule items
    return this.webReqService.get(`api/public/schedules/load/${schedule_owner}/${schedule_id}`);
  } 

  deleteAllSchedules() {
    return this.webReqService.delete('api/private/schedules/deleteall');
  }

  deletethisSchedule(schedule_id: string) {
    return this.webReqService.delete(`api/private/schedules/deleteschedule/${schedule_id}`);
  }

  switchScheduleFlag(schedule_id: string) {
    return this.webReqService.get(`api/private/schedules/${schedule_id}/switchflag`);
  }

  doesPublicScheduleExist(schedule_id: string) {
    return this.webReqService.get(`api/public/schedulecheck/${schedule_id}`);
  }

  doesPrivateScheduleExist(schedule_id: string) {
    return this.webReqService.get(`api/private/schedulecheck/${schedule_id}`);
  }
}
