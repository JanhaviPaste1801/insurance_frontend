import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddClaimPolicy } from 'src/app/models/addClaim';
import { Policy } from 'src/app/models/policy';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ClaimedPolicyService } from 'src/app/services/claimed-policy.service';
import { NotificationService } from 'src/app/services/notification.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-admin-policy-details',
  templateUrl: './admin-policy-details.component.html',
  styleUrls: ['./admin-policy-details.component.css']
})
export class AdminPolicyDetailsComponent implements OnInit {

  constructor(private authService:AuthService,private notifyService:NotificationService,private claimService:ClaimedPolicyService, private router: Router, private route: ActivatedRoute, private policyService: PolicyService, private claimedPolicyService:ClaimedPolicyService) { }

  policy:Policy;
  policyId:number;
  users:any;
  claim:any
  planId:number
  isUserListNotEmptyFlag:boolean = true;
  claimPolicy : AddClaimPolicy={
    userId:undefined,
    policyId:undefined,
    claimedDate:undefined,
    status:undefined
 
  };
 
  ngOnInit() {
    this.policy = new Policy();
    this.policyId = this.route.snapshot.params['policyId'];
    this.policyService.getPolicy(this.policyId)
      .subscribe(data => {
        console.log(data)
        this.policy = data;
      }, error => console.log(error));
      this.claimedPolicyService.getPolicyHoldersByPolicy(this.policyId)
        .subscribe(
          data=>{
            this.users = data;
            this.isUserListNotEmptyFlag = true;
            console.log(data);
            console.log(this.isUserListNotEmptyFlag)
          },
          error=>{
            this.isUserListNotEmptyFlag = false;
            console.log(this.isUserListNotEmptyFlag)
            console.log(error)
          }
        )
  }

  isUserListNotEmpty():boolean{
    return this.isUserListNotEmptyFlag;
  }

  buy():void{
    
    this.claimPolicy.policyId = this.route.snapshot.params['policyId'];
    console.log( this.claimPolicy.policyId)
    this.claimPolicy.userId=+this.authService.getUserId();
    this.claimService.addClaimedPolicy(this.claimPolicy).subscribe(
      data=>{
        this.claim=data;
        this.planId = this.claim.planId;
        alert("Claimed successfully")
        this.notifyService.showSuccessWithTimeout("Policy claimed Successfully !!", "Notification", 2000)
        console.log(data);
        this.router.navigate(['user-claimed-policy-details', +this.authService.getUserId(),this.planId])
      },error=>{
        this.notifyService.showErrorWithTimeout("This policy has already been claimed !!", "Warning", 2000)
        //alert("Already Claimed")
        console.log(error);
        
      }
    );
  }


  back(){
    this.router.navigate(['admin-policy-list']);
  }

  updatePolicy(policyId: number){
    this.router.navigate(['updatePolicy',policyId])
    .then(() => {
      console.log(this.policy)
      this.router.navigate(['admin-policy-list'])
    });
  }
}
