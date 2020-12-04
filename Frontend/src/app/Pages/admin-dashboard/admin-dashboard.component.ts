import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authenticate: AuthenticationService) { }

  username: string;

  ngOnInit(): void {

    this.authenticate.adminLetMeIn().subscribe((message: any) => {      
    })
    
    this.username = this.authenticate.getUserName();
  }  
  
  logOutButton() {
    this.authenticate.logout();
  }

}
