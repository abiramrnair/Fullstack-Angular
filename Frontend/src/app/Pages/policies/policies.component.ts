import { Component, OnInit } from '@angular/core';
import { WebRequestService } from 'src/app/web-request.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  dmca_policy: string;
  aup_policy: string;
  security_policy: string; 

  constructor(private webReqService: WebRequestService) { }

  ngOnInit(): void {

    this.webReqService.getPolicies().subscribe((items: any) => {        
      this.dmca_policy = items[0].dmca_policy;
      this.aup_policy = items[1].aup_policy;
      this.security_policy = items[2].security_policy;      
    })
  }

}
