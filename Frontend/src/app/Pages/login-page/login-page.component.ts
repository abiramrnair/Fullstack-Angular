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

  loginButton(email: string, password: string) {
      this.authentication.login(email, password).subscribe((res: HttpResponse<any>) => {

        if (res.body.message == "Exists") {
          this.invalid = "An Account With This Email Already Exists"
        }
  
        else if (res.body.message == "Fill Out All Input Fields") {
          this.invalid = "Fill Out All Input Fields"
        }
        
        else if (res.body.message == "Invalid Email") {
          this.invalid = "Invalid Email"
        }

        else if (res.body.message == "Account Inactive, Contact Administrator") {
          this.invalid = "Account Inactive, Contact Administrator"
        }

        else {
          this.router.navigate(['/dashboard']); 
        }
            
      })
  };
  
  logout() {
    this.authentication.logout();
  }
}