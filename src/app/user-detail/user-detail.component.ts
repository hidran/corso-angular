import {UserResponse, UserService} from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private usercopy: User;
  private __user: User;

  @Input() set user(user: User) {
    this.__user = user;
    this.usercopy = Object.assign({}, user);
  }

  get user() {
    return this.__user;
  }

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.user = new User();
    this.__user = new User();
    this.usercopy = new User();
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      if (id) {


        this.userService.getUser(id)
          .subscribe((userResponse:UserResponse) => this.user = userResponse.data);

      }
    });
  }

  saveUser() {
    let obs;

    if (this.user.id > 0) {
      obs = this.userService.updateUser(this.user);
    }
    else {
      obs = this.userService.createUser(this.user);
    }
    obs.subscribe(resp => {
      console.log('response', resp);
      this.router.navigate(['users']);
    });

  }
  resetForm(form: UntypedFormGroup) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }

}
