import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Policy } from 'src/app/models/policy';
import { NotificationService } from 'src/app/services/notification.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-admin-policy-list',
  templateUrl: './admin-policy-list.component.html',
  styleUrls: ['./admin-policy-list.component.css']
})
export class AdminPolicyListComponent implements OnInit {

  constructor(private notifyService:NotificationService, private router : Router, private policyService: PolicyService, private route: ActivatedRoute) { }
  policies : Observable<Policy[]>
  searchText = '';
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    // this.policies = this.policyService.getPolicyList();
    this.policyService.getPolicyList().subscribe(res=>this.policies=res);
    //window.location.reload();
  }

  deletePolicy(policyId:number){
    this.policyService.deletePolicy(policyId)
    .subscribe(
      data => {
        console.log(data);
        this.notifyService.showSuccessWithTimeout("Deleted Successfully!!", "Notification", 2000)
        // alert("Deleted successfully");
        this.reloadData();
      },
      error => {
        this.notifyService.showErrorWithTimeout("Error while Deleting the Policy!!", "Warning", 2000)
        // alert("Error !!");
        console.log(error)});
  }


  policyDetails(policyId: number){
    this.router.navigate(['admin-policy-details',policyId]);
  }

  updatePolicy(policyId: number){
    this.router.navigate(['updatePolicy',policyId]);
  }

  add(){
    this.router.navigate(['add-Policy'])
  }

  go(){
    this.router.navigate(['admin-userpolicy-details'])
  }

}
