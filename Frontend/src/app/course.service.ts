import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private webReqService: WebRequestService) { }

  listCourses(subject: string, course_number: string, course_cmpnt: string) {
    return this.webReqService.get('api/courses?' + 'subject=' + subject + '&course_number=' +  course_number + '&course_cmpnt=' + course_cmpnt);
  }
  
  subjectDropDown() {
    return this.webReqService.get('api/dropdown');
  }   
  
  addCourse(schedule_name: string, course_name: string, subject_code: string, course_code: string) {
    return this.webReqService.put('api/schedules/addcourse?' + 'schedule=' + schedule_name + '&course_name=' + course_name + '&subject_code=' + subject_code + '&course_code=' + course_code);
  }

  doesCourseExist(schedule_name: string, course_name: string, course_code: string) {
    return this.webReqService.get('api/schedules/check?' + 'schedule=' + schedule_name + '&course_code=' + course_code + '&course_name=' + course_name);
  }
}
