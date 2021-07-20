import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardService, private router: Router, private notifyService:NotificationService) {}  
canActivate(): boolean {  
    if (!this.Authguardservice.isUserLoggedIn()) {  
      this.notifyService.showErrorWithTimeout("You should login first to access all the URLs","Notification",2000)
        this.router.navigateByUrl("/user-login");  
    }  
    return this.Authguardservice.isUserLoggedIn();  
}  
  
}
