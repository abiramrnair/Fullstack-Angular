import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';
import { tap, map } from 'rxjs/operators';
import { access } from 'fs';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private webReqService: WebRequestService, private router: Router) { }

  login(username: string, password: string) {
     return this.webReqService.login(username, password).pipe(

      tap((res: HttpResponse<any>) => {
          this.setSession(res.body.username, res.body.accessToken, res.body.refreshToken);
      })
     )
  }

  register(username: string, email: string, password: string) {
    return this.webReqService.post('api/public/register?' + 'username=' + username + '&email=' + email + '&password=' + password);
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

  logout() {
    return this.removeSession();
  }

  getAccessToken() { // gets token to append to url
    return localStorage.getItem('x-access-token');
  }

  setAccessToken(accessToken: string) { // set new one after expires
    localStorage.setItem('x-access-token', accessToken);
  }
}
