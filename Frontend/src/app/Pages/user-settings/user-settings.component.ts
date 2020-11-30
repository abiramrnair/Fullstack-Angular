import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { UsermanagementService } from 'src/app/usermanagement.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authenticate: AuthenticationService, private userService: UsermanagementService) { }

  credentials: any[];
  email: string;
  role: string;
  status: string;
  username: string;
  alert: string;

  ngOnInit(): void {
    this.username = this.authenticate.getUserName();
    this.userService.listUserInfo().subscribe((message: any) => {
        this.email = message.email;
        this.role = message.role;
        this.status = message.status;
    })
  }
  
  changePasswordButton(old_password: string, new_password: string) {
    this.authenticate.changePassword(old_password, new_password, this.email).subscribe((message: any) => {
      this.alert = message.body.message;
    })
  }

}
