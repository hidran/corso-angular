import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
    this.route.params.subscribe(param => {
      const id = Number(param.id); // '12'
      const user = this.userService.getUser(id);
      if (user) {
        this.user = user;
      }

    });
  }
  saveUser() {

    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
    else {
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }
  resetForm(form: FormGroup) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.usercopy;
    }

  }

}
