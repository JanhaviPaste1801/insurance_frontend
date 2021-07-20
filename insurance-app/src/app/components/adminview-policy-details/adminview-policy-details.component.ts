import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Policy } from 'src/app/models/policy';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-adminview-policy-details',
  templateUrl: './adminview-policy-details.component.html',
  styleUrls: ['./adminview-policy-details.component.css']
})
export class AdminviewPolicyDetailsComponent implements OnInit {

  constructor(private claimPolicyService : ClaimedPolicyService,private policyService:PolicyService, private router: Router, private route: ActivatedRoute) { 
    this.policy=[];
  }
  policy:Array<Policy>;
  ngOnInit(): void {
    this.policyService.getPolicyList().subscribe(
      (policyList:Policy[])=>{
        this.policy = policyList;
        console.log(this.policy)
      }
    )
  }

  go(){
    this.router.navigate(['user-login'])
  }

}
