
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
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
  public users$: Observable<User[]> = this.service.getUsers();


  @Output('updateUser') updateUser = new EventEmitter<User>();


  constructor(private service: UserService) {


  }
  ngOnInit(): void {


  }
  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }
  onSelectUser(user: User) {
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);

  }
}
