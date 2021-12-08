
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../classes/User';
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
  @Output('updateUser') updateUser = new EventEmitter<User>();
  constructor(private service: UserService) {


  }
  ngOnInit(): void {

    this.users = this.service.getUsers();
  }
  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }
  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);

  }
}
