import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-admin-policy-edit',
  templateUrl: './admin-policy-edit.component.html',
  styleUrls: ['./admin-policy-edit.component.css']
})
export class AdminPolicyEditComponent implements OnInit {

  dmca_policy: string;
  aup_policy: string;
  security_policy: string;

  constructor(private webReqService: WebRequestService, private authenticate: AuthenticationService) { }

  ngOnInit(): void {

    this.authenticate.adminLetMeIn().subscribe((message: any) => {      
    })

    this.webReqService.getPolicies().subscribe((items: any) => {        
      this.dmca_policy = items[0].dmca_policy;
      this.aup_policy = items[1].aup_policy;
      this.security_policy = items[2].security_policy;      
    })
  }

  submitNewPoliciesButton(dmca: string, aup: string, security: string) {
    this.webReqService.submitPolicies(dmca, aup, security).subscribe((message: any) => {
      console.log(message);
    })
  }
}
