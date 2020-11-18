import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private webReqService: WebRequestService, private router: Router) { }

  login(username: string, password: string) {
     return this.webReqService.post('api/public/login?' + 'username=' + username + '&password=' + password);
  }

  register(username: string, email: string, password: string) {
    return this.webReqService.post('api/public/register?' + 'username=' + username + '&email=' + email + '&password=' + password);
  }
  
  private removeSession() {
    localStorage.removeItem('username');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');
  }

  logout() {
    return this.removeSession();
  }
}
