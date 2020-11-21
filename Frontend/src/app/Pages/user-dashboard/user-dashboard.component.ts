import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authenticate: AuthenticationService) { }

  username: string;

  ngOnInit(): void {
    this.username = this.authenticate.getUserName();
  }  
  
  logOutButton() {
    this.authenticate.logout();
  }
  
}
