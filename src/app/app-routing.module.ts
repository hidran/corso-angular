import { UserDataComponent } from './user-data/user-data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserService } from './services/user.service';
const routes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    component: UsersComponent

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  }
  ,
  {
    path: 'users/:id',
    component: UserDataComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
