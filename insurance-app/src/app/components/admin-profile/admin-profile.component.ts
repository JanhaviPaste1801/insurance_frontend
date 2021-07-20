import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  constructor(private router:Router,private authService:AuthService, private userService:UserService, private route :ActivatedRoute) { }

  user:any

  userId:number

  ngOnInit(): void {
    this.userService.getUser(+this.authService.getUserId()).subscribe(
      data =>{
        this.user =data;
        console.log(this.user)
      },
      error=>{
        console.log(error)
      }
    )
  }
  go(){
    this.router.navigate(['admin-policy-list'])
  }

  


 

 
}
