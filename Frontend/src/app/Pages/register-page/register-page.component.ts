import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }

  link: string;
  email: string;
  button: number;
  message: string;

  ngOnInit(): void {
    this.button = 0;
  }

  registerButton(username: string, email: string, password: string) {
    this.email = email;
    this.authentication.register(username, email, password).subscribe((res: HttpResponse<any>) => {
      this.link = res.body.link;  
      
      if (res.body.message == "Exists") {
        this.message = "An Account With This Email Already Exists"
      }

      else if (res.body.message == "Enter All Text Fields") {
        this.message = "Make Sure All Text Fields Are Filled"
      }
      
      else if (res.body.message == "Invalid Email") {
        this.message = "Invalid Email"
      }

      if (this.link != null) {
        this.button = 1;
      }
      
      else {
        this.button = 0;
      }
    });  
  }

  authButton() {
    this.authentication.verifyLink(this.email, this.link).subscribe((res: HttpResponse<any>) => {      
    })
  }  
}
