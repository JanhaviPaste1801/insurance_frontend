import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  userDetails: User;
  userInfo: User;
  userId:number

  userr: User = new User();



  constructor(private notifyService :NotificationService,private toastr:ToastrService, private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    // localStorage.setItem('SeesionUser',this.authService.getUserId()) 
    // console.log(this.authService.getUserId())
  }

  get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }


  login = false

  isLoggedIn: boolean;

  onlogin(): boolean {
    this.isLoggedIn = false;
    this.userService.userlogin(this.userr.email, this.userr.password).subscribe(
      (flag: boolean) => {
        console.log(flag);
        if (flag) {
        this.notifyService.showSuccessWithTimeout("Logged In successfully !!", "Notification", 2000)
        //alert("Login Successful")
          this.isLoggedIn = true;
          this.userService.getUserId(this.userr.email).subscribe(
            (user: User) => {
              this.userInfo = user;
              if (this.userInfo.role == 'USER') {
                if(this.userInfo.status == 'INACTIVE'){
                  alert("NOT AUTHORISED");
                }
                else{
                  console.log(this.userInfo);
                  console.log("USER")
                  this.authService.removeUserId();
                  this.authService.setUserId(this.userInfo.userId);
                  // localStorage.setItem('SeesionUser',this.userInfo.userId.toString()) 
                  this.authService.removeUserName();
                  this.authService.setUserName(this.userInfo.firstName);
                  this.router.navigate(['user-home-page'])
                  //window.location.reload();
                }

              }
              else if (this.userInfo.role == 'ADMIN') {
                console.log(this.userInfo);
                console.log("ADMIN")
                this.authService.removeUserId();
                this.authService.setUserId(this.userInfo.userId);
                // localStorage.setItem('SeesionUser',this.userInfo.userId.toString()) 
                this.authService.removeUserName();
                this.authService.setUserName(this.userInfo.firstName);
                this.router.navigate(['admin-policy-list'])
                //window.location.reload();
              }
              else if (this.userInfo.role === 'SUPERADMIN') {
                console.log(this.userInfo);
                console.log("SUPER-ADMIN")
                this.authService.removeUserId();
                this.authService.setUserId(this.userInfo.userId);
                // localStorage.setItem('SeesionUser',this.userInfo.userId.toString()) 
                this.authService.removeUserName();
                this.authService.setUserName(this.userInfo.firstName);
                this.router.navigate(['super-admin-profile'])
                // window.location.reload();
              }
              else {
                console.log("Not an admin and not and user")
                alert("Not authorised to login to this portal")
              }
            }
           
            )
        }
        else {
          alert("Invalid username or password!")
          this.isLoggedIn = false;
          this.router.navigate(['user-login'])
        }
      }, error =>{
        this.notifyService.showErrorWithTimeout("Not Authorised Or Bad Credentials !!", "Notification", 2000)
        // alert("Not Authorised OR Bad Credentails")
      }
    );
    return this.isLoggedIn;
  }

  onSubmit(): boolean {

    //   this.userService.userlogin(this.userr.email, this.userr.password).subscribe(data => {
    //     this.login=true;
    //     alert("Logged In Successfully")
    //     this.router.navigate(['user-home-page'])
    //   }, error => {
    //     alert("Bad Credentials")
    //     this.router.navigate(['user-login']);
    //   });
    //   return this.login;
    // }

    // console.log(this.userForm.value);
    //this.user = this.userForm.value;
    this.isLoggedIn = false;
    this.userService.userlogin(this.userr.email, this.userr.password).subscribe(
      (flag: boolean) => {
        console.log(flag);
        if (flag) {
          alert("Login Successful!")
          this.isLoggedIn = true;
          this.userService.getUserId(this.userr.email).subscribe(
            (user: User) => {
              this.userInfo = user;
              console.log(this.userInfo);
              this.authService.removeUserId();
              this.authService.setUserId(this.userInfo.userId);
              this.authService.removeUserName();
              this.authService.setUserName(this.userInfo.firstName);
            })

          this.router.navigate(['user-home-page'])
        }
        else {
          alert("Invalid username or password!")
          this.isLoggedIn = false;
          this.router.navigate(['user-login'])
        }
      }
    );
    return this.isLoggedIn;
  }
}

