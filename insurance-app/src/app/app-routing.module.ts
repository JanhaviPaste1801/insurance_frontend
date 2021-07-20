import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPolicyComponent } from './components/add-policy/add-policy.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminPolicyDetailsComponent } from './components/admin-policy-details/admin-policy-details.component';
import { AdminPolicyListComponent } from './components/admin-policy-list/admin-policy-list.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminUserAndPolicyDetailsComponent } from './components/admin-user-and-policy-details/admin-user-and-policy-details.component';
import { AdminviewPolicyDetailsComponent } from './components/adminview-policy-details/adminview-policy-details.component';
import { CarosolComponent } from './components/carosol/carosol.component';
import { HomeBackgroundComponent } from './components/home-background/home-background.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginHomePageComponent } from './components/login-home-page/login-home-page.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchPolicyComponent } from './components/search-policy/search-policy.component';
import { SuperadminProfileComponent } from './components/superadmin-profile/superadmin-profile.component';
import { UpdatePolicyComponent } from './components/update-policy/update-policy.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserClaimedPolicyDetailsComponent } from './components/user-claimed-policy-details/user-claimed-policy-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserHoldedPoliciesComponent } from './components/user-holded-policies/user-holded-policies.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UsersPolicyListComponent } from './components/users-policy-list/users-policy-list.component';
import { AuthenticationGuard } from './services/authentication.guard';

export const routes: Routes = [
 {path:'' , component:HomeBackgroundComponent},
  { path: 'register', component: HomePageComponent },
  { path: 'login', component: LoginHomePageComponent },
  {path: 'user-login' , component:UserLoginComponent},
  {path: 'admin-home-page' , component:AdminHomePageComponent, canActivate:[AuthenticationGuard]},
  {path: 'admin-login' , component:AdminLoginComponent, canActivate:[AuthenticationGuard]},
  {path:'add-Policy', component:AddPolicyComponent, canActivate:[AuthenticationGuard]},
  {path:'policy-list', component:PolicyListComponent, canActivate:[AuthenticationGuard]},
  {path:'policyDetails/:policyId', component:PolicyDetailsComponent, canActivate:[AuthenticationGuard]},
  {path:'updatePolicy/:policyId', component:UpdatePolicyComponent, canActivate:[AuthenticationGuard]},
  {path:'user-home-page', component:UserHomePageComponent, canActivate:[AuthenticationGuard]},
  {path:'user-list', component:UserListComponent, canActivate:[AuthenticationGuard]},
  {path:'users-policy-list', component:UsersPolicyListComponent, canActivate:[AuthenticationGuard]},
  {path:'search-policy', component:SearchPolicyComponent, canActivate:[AuthenticationGuard]},
  {path:'carasol', component:CarosolComponent, canActivate:[AuthenticationGuard]},
  {path:'userDetails/:userId', component:UserDetailsComponent, canActivate:[AuthenticationGuard]},
  {path:'updateUser/:userId', component:UpdateUserComponent, canActivate:[AuthenticationGuard]},
  {path:'admin-policy-list', component:AdminPolicyListComponent, canActivate:[AuthenticationGuard]},
  {path:'admin-policy-details/:policyId', component:AdminPolicyDetailsComponent, canActivate:[AuthenticationGuard]},
  {path:'admin-userpolicy-details', component:AdminUserAndPolicyDetailsComponent, canActivate:[AuthenticationGuard]},
  {path:'user-holded-policies/:userId', component:UserHoldedPoliciesComponent, canActivate:[AuthenticationGuard]},
  {path:'corosol', component:CarosolComponent},
  {path:'user-claimed-policy-details/:userId/:planId' , component:UserClaimedPolicyDetailsComponent, canActivate:[AuthenticationGuard]},
  {path:'profile',component:ProfileComponent, canActivate:[AuthenticationGuard]},
  {path:'admin-profile',component:AdminProfileComponent, canActivate:[AuthenticationGuard]},
  {path:'super-admin-profile',component:SuperadminProfileComponent, canActivate:[AuthenticationGuard]},
  {path:'adminView-policyHolderDetails',component:AdminviewPolicyDetailsComponent, canActivate:[AuthenticationGuard]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

