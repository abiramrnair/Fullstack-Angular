import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsermanagementService } from 'src/app/usermanagement.service';

@Component({
  selector: 'app-admin-usersettings',
  templateUrl: './admin-usersettings.component.html',
  styleUrls: ['./admin-usersettings.component.css']
})
export class AdminUsersettingsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsermanagementService) { }

  size: number;
  users: any[];
  thing: string;

  ngOnInit(): void {

      this.userService.listUsers().subscribe((items: any) => {
          this.users = items;
          console.log(items)
          this.size = items.length;
      })
  }

  switchAdminButton(email: string) {      
      this.userService.switchUserAdmin(email).subscribe((response: HttpResponse<any>) => {
          console.log(response)
          this.router.navigate(['/admin/dashboard/usersettings']); 
    })
  }

  switchActivationButton(email: string) {
      this.userService.switchUserFlag(email).subscribe((response: HttpResponse<any>) => {

          this.router.navigate(['/admin/dashboard/usersettings']);          
    })
  }

}
