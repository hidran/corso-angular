import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService) {
    this.user = {
      id: 0,
      name: '',
      lastname: '',
      email: '',
      fiscalcode: '',
      province: '',
      phone: '',
      age: 0,
    }
  }

  ngOnInit(): void {
  }
  saveUser() {

    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    }
    else {
      this.userService.createUser(this.user);
    }
    // Let's unbind this.user from previously created/modified user
    this.user = new User();
  }
  resetForm(form: FormGroup) {

    if (this.user.id === 0) {
      this.user = new User();
    } else {
      form.reset();
    }

  }
}
