import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-superadmin-profile',
  templateUrl: './superadmin-profile.component.html',
  styleUrls: ['./superadmin-profile.component.css']
})
export class SuperadminProfileComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService, private userService:UserService, private route :ActivatedRoute) { }

  user:any

  userId:number

  ngOnInit(): void {
    this.userService.getUser(+this.authService.getUserId()).subscribe(
      data =>{
        this.user =data;
        console.log(this.user)
       // this.reload();
      },
      error=>{
        console.log(error)
      }
    )  
  }
  // reload():void{
  //   window.location.reload();
  // }
  go(){
    this.router.navigate(['admin-policy-list'])
  }


}
