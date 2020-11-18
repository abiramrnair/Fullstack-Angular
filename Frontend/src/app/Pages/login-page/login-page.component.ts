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

  invalid: any;

  loginButton(username: string, password: string) {
      this.authentication.login(username, password).subscribe((res: HttpResponse<any>) => {
        
        if (res.status == 200) {
          console.log(res)
          this.invalid = 0;          
        } else {
          this.invalid = 1;
        }          
      });
  }

  logout() {
    this.authentication.logout();
  }
}