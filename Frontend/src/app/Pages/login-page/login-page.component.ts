import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
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

  invalid: string;

  loginButton(username: string, password: string) {
      this.authentication.login(username, password).subscribe((res: HttpResponse<any>) => {

          this.router.navigate(['/dashboard']);     
      }, (error: HttpErrorResponse) => { this.invalid = "Login Failed" });
  }
  
  logout() {
    this.authentication.logout();
  }
}