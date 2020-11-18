import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }

  ngOnInit(): void {
  }

  registerButton(username: string, email: string, password: string) {
    this.authentication.register(username, email, password).subscribe((items: any) => {
      console.log(items)
    });
  }

  
}
