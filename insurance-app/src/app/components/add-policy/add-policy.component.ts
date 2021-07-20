import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Policy } from 'src/app/models/policy';
import { NotificationService } from 'src/app/services/notification.service';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {
  policy : Policy = new Policy();
  policyForm:FormGroup;
  policyTypes = ['Medical Insurance' , 'Individual Coverage' , 'Senior Citizen Coverage', 'family floater Coverage', 'Unit Linked Health Plans']
  constructor(private notifyService:NotificationService, private router : Router, private policyService : PolicyService , private fb :FormBuilder) { }

  ngOnInit(): void {
    this.policyForm = this.fb.group({
      policyControl: ['Policy Type']
    });
  }

    add() {
      console.log(this.policy);
      this.policyService.createPolicy(this.policy).subscribe(
      data=>{
        this.notifyService.showSuccessWithTimeout("Added Successfully!!", "Notification", 2000)
        // alert("Added successfully"),
        this.router.navigate(['admin-policy-list'])
      },
      error=>{
      console.log(error)
      this.notifyService.showErrorWithTimeout("ERROR while Adding the Policy!!", "Warning", 2000)
      //alert("Error while Adding");
      this.router.navigate(["admin-policy-list"]);
      })
    }
  
    // UserName Validations
    nameFlag: boolean= false;
    validateName() {
      var flag =  /^[a-zA-Z ]+$/.test(this.policy.policyName);
      if(!flag) {
        this.nameFlag=true;
      }
      else {
        this.nameFlag=false;
      }
    }

  
  
      buttonFlag:boolean=true;
      enableButton(){
          this.buttonFlag=this.nameFlag;
      }

      go(){
        this.router.navigate(['admin-policy-list'])
      }

}
