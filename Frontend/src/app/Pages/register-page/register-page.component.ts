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
        this.message = "Invalid Email (Incorrect Email Format)"
      }

      else if (res.body.message == "Invalid Username") {
        this.message = "Invalid Username (Must Be Minimum 3 Characters)"
      }

      else if (res.body.message == "Invalid Password") {
        this.message = "Invalid Password (Must Be Minimum 6 Characters)"
      }

      if (this.link != null) {
        this.message = "";
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
