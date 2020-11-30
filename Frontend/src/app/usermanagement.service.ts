import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private webReqService: WebRequestService, private authentication: AuthenticationService) { }

  listUsers() {
      return this.webReqService.get('api/admin/getusers');
  }

  switchUserAdmin(email: string) {
      return this.webReqService.switchUserPrivilege(email);
  }

  switchUserFlag(email: string) {
      return this.webReqService.switchUserFlag(email);
  }

  listUserInfo() {
      return this.webReqService.get('api/private/userinfo');
  }
}
