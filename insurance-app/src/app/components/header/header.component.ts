import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public authService :AuthService, public userService : UserService, public notifyService: NotificationService) { }
 isLoggedIn:boolean
 role:String;
  user:string;
  userInfo:User;
  userName :string;
  userRole = "USER"
  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    console.log(this.userName)
  }

  logout(): void {
    this.notifyService.showSuccessWithTimeout("Logged Out successfully !!", "Notification", 1500)
    this.authService.removeUserName()
    console.log(this.userName)
     this.authService.logOutUserName()
     this.authService.logOutUserId()
     
    this.router.navigate(['/user-login'])
  }

  profile(){
    // if(this.authService.getUserName() === 'Admin')
    // this.router.navigate(['admin-profile'])
    
    
    this.userService.getUser(+this.authService.getUserId()).subscribe(
      (userr:User) => {
        this.userInfo = userr;
        console.log(this.userInfo.role)
        if(this.userInfo.role == 'USER'){
          this.router.navigate(['profile'])
        
        }
        else if(this.userInfo.role=='SUPERADMIN'){
          this.router.navigate(['super-admin-profile'])
        
        }
        else{
          this.router.navigate(['admin-profile'])
          
        }
      }
    )
  }

  userLoginFlag :boolean=false;
  isLoggedInUser() :boolean{
    this.user = this.authService.getUserId();
    if(this.user != null){
      this.userLoginFlag = true;
    }
    return this.userLoginFlag;
  }


userLogoutFlag :boolean = false;
  isLoggedOut():boolean{
    return this.userLogoutFlag = this.authService.removeUserId();
  }

  // adminLoginFlag:boolean = false;
  // isAdminLoggedIn():boolean{
  //   this.adminLoginFlag = this.authService.authenticate("admin@gmail.com","admin");
  //   console.log(this.adminLoginFlag);
  //   return this.adminLoginFlag
  // }

  isLoggedInFlag = this.authService.login;
  
  
}


