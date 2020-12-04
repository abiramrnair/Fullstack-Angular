import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly MAIN_URL;

  constructor(private http: HttpClient) { 
    this.MAIN_URL = 'http://localhost:3000';    
  }

  get(uri : string) {
    return this.http.get(`${this.MAIN_URL}/${uri}`);
  }

  put(uri : string) {
    return this.http.put(`${this.MAIN_URL}/${uri}`, null);
  }

  post(uri : string) {
    return this.http.post(`${this.MAIN_URL}/${uri}`, null);
  }

  delete(uri : string) {
    return this.http.delete(`${this.MAIN_URL}/${uri}`);
  }

  login(email: string, password: string) {
    return this.http.post(`${this.MAIN_URL}/api/public/login`, {
      email,
      password
    }, { 
      observe: 'response'
    });
  }
  
  register(username: string, email: string, password: string) {
    return this.http.post(`${this.MAIN_URL}/api/public/register`, {
      username,
      email,
      password
    }, {
      observe: 'response'
    })
  }

  createSchedule(schedule_name: string, schedule_description: string) {
    return this.http.put(`${this.MAIN_URL}/api/private/schedules/createschedule`, {
      schedule_name,
      schedule_description
    }, {
      observe: 'response'
    })
  }

  addCourses(schedule_name: string, course_name: string, subject_code: string, course_code: string) {
    return this.http.put(`${this.MAIN_URL}/api/private/schedules/addcourse/${schedule_name}`, {
      course_name,
      subject_code,
      course_code
    }, {
      observe: 'response'
    }) 
  }

  deleteCourses(schedule_name: string, course_name: string, subject_code: string, course_code: string) {
    return this.http.put(`${this.MAIN_URL}/api/private/schedules/deletecourse/${schedule_name}`, {
      course_name,
      subject_code,
      course_code
    }, {
      observe: 'response'
    })
  }

  addPublicCourses(schedule_name: string, course_name: string, subject_code: string, course_code: string) {
    return this.http.put(`${this.MAIN_URL}/api/public/schedules/addcourse/${schedule_name}`, {
      course_name,
      subject_code,
      course_code
    }, {
      observe: 'response'
    })
  }

  addReview(review: string, course: string) {
    return this.http.put(`${this.MAIN_URL}/api/private/schedules/courses/add-review`, {
      course,
      review
    }, {
      observe: 'response'
    })
  }

  switchUserPrivilege(user_email: string) {
    return this.http.put(`${this.MAIN_URL}/api/admin/users/switchadmin`, {
      email: user_email
    })
  }

  switchUserFlag(user_email: string) {
    return this.http.put(`${this.MAIN_URL}/api/admin/users/switchflag`, {
      email: user_email
    }, {
      observe: 'response'
    })
  }

  switchReview(review_id: string) {
    return this.http.put(`${this.MAIN_URL}/api/admin/reviews/switchflag`, {
      review_id: review_id
    }, {
      observe: 'response'
    })
  }

  editSchedule(old_schedule_name: string, new_schedule_name: string, new_schedule_description: string) {
    return this.http.post(`${this.MAIN_URL}/api/private/schedules/edit`, {
      old_schedule_name,
      new_schedule_name,
      new_schedule_description
    }, {
      observe: 'response'
    })
  }
}
