import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: Observable<User[]>
  userss:User;
  constructor(private userService: UserService, private router: Router, private notifyService: NotificationService) { }
  roleList: any = ["USER", "ADMIN", "SUPERADMIN"];
  statusList: any = ["ACTIVE", "INACTIVE"];
 
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.users = this.userService.getUserList();
  }

  go() {
    this.router.navigate(['super-admin-profile'])
  }

 

  deleteUser(userId: number) {
    this.userService.deleteUser(userId)
      .subscribe(
        data => {
          alert("Deleted Successfully")
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(userId: number) {
    this.router.navigate(['userDetails', userId]);
  }

  update(user: User) {
    console.log(user);

    this.userService.updateUser(user).subscribe(
      response => {
        console.log('Successfully Updated!', response),
        this.notifyService.showSuccessWithTimeout("Updated successfully.", "Notification", 2000)
          // alert("Updated Successfully!")
        this.router.navigate(['/user-list']);
      },
      error => {
        console.log(error),
        this.notifyService.showErrorWithTimeout("ERROR !!Data not updated", "Warning", 2000)
          //alert("ERROR !!Data not updated")
      }
    )
   
  }

  updateUser(userId: number) {
    this.router.navigate(['updateUser', userId]);
  }
}
