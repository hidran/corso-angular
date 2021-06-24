
import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',

  templateUrl: 'users.component.html',
  styleUrls: [
    'users.component.css'
  ]
})

export class UsersComponent implements OnInit {
  title = 'Users'
  public users: User[] = [];

  constructor(private service: UserService) {


  }
  ngOnInit(): void {

    this.users = this.service.getUsers();
  }
  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }
}
