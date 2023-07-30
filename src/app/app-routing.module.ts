import { UserDataComponent } from './user-data/user-data.component';
import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';
import { activateUsersFn } from './services/route-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent,


  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent,
    canActivate: [activateUsersFn]
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }
  ,
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    FontAwesomeModule,
    CommonModule
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
