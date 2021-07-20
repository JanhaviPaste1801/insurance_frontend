import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user:User = new User();
  userrForm:FormGroup;
 
  constructor(private router:Router, private userService : UserService, private notifyService:NotificationService) { }

  ngOnInit(): void {
  }

 
  // Adds a new User
  signUp() {
    console.log(this.user);
    this.userService.createUser(this.user).subscribe(
    data=>{
      this.notifyService.showSuccessWithTimeout("Registered successfully. Please wait till your request is approved", "Notification", 2000)
   //alert("Registered successfully"),
      this.router.navigate(['user-login'])
    },
    error=>{
      this.notifyService.showErrorWithTimeout("Error while registering !!", "Warning", 2000)
 //alert("Error while registering");
    console.log(error)
    this.router.navigate([""]);
    })
  }

  // UserName Validations
  nameFlag: boolean= false;
  validateName() {
    var flag =  /^[a-zA-Z ]+$/.test(this.user.firstName);
    if(!flag) {
      this.nameFlag=true;
    }
    else {
      this.nameFlag=false;
    }
  }

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.user.phoneNo);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag||this.emailFlag||this.phoneFlag;
    }

}
