import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private webReqService: WebRequestService, private router: Router, private http: HttpClient) { }

  login(email: string, password: string) {
     return this.webReqService.login(email, password).pipe(

      tap((res: HttpResponse<any>) => {
          this.setSession(res.body.username, res.body.accessToken, res.body.refreshToken);
      })
     )
  }

  register(username: string, email: string, password: string) {
    return this.webReqService.register(username, email, password).pipe(

      tap((res: HttpResponse<any>) => {          
      })
    )
  }

  private setSession(username: string, accessToken: string, refreshToken: string) {
    localStorage.setItem('username', username)
    localStorage.setItem('x-access-token', accessToken)
    localStorage.setItem('x-refresh-token', refreshToken)
  }

  private removeSession() {
    localStorage.removeItem('username');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  logout() { // Logout method
    const token = this.getRefreshToken();
    const headers = { 'x-refresh-token': token };
    this.http.delete(`${this.webReqService.MAIN_URL}/api/public/logout`, { headers }).subscribe();   
    this.removeSession();
    this.router.navigate(['/login']);     
  }

  getAccessToken() { // gets token to append to url
    return localStorage.getItem('x-access-token');
  }

  setAccessToken(accessToken: string) { // set new one after expires
    localStorage.setItem('x-access-token', accessToken);
  }

  getRefreshToken() {
    return localStorage.getItem('x-refresh-token');
  }

  getUserName() {
    return localStorage.getItem('username');
  }

  getNewAccessToken() {
      return this.http.get(`${this.webReqService.MAIN_URL}/api/protected/token`, {
        headers: {
          'x-refresh-token': this.getRefreshToken()
        },
        observe: 'response'
    }).pipe(
      tap((res: HttpResponse<any>) => {
        this.setAccessToken(res.body.accessToken)
      })
    )
  }

  verifyLink(email: string, hashed_code: string) {
      return this.http.post(`${this.webReqService.MAIN_URL}/api/user/verify`, {
          email,
          hashed_code
        }, {
          observe: 'response'
    })
  } 

  changePassword(old_password: string, new_password: string, email: string) {
    return this.http.put(`${this.webReqService.MAIN_URL}/api/private/updatepassword`, {
      email,
      old_password,
      new_password
    }, {
      observe: 'response'
    })
  }
}
