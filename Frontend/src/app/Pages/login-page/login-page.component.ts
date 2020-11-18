import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private authentication: AuthenticationService ) { }

  ngOnInit(): void {
  } 

  loginButton(username: string, password: string) {
    this.authentication.login(username, password).subscribe((items: any) => {

        localStorage.setItem('username', items.username)
        localStorage.setItem('x-access-token', items.accessToken)
        localStorage.setItem('x-refresh-token', items.refreshToken)
        
    });
  }

  logout() {
    this.authentication.logout();
  }
}