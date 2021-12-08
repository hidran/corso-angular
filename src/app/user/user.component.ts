import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //inputs: ['user:user-data']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User | undefined;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();

  constructor(private userService: UserService) {
    this.user = {
      name:'',
      lastname:'',
      email: '',
      fiscalcode: '',
      province : '',
      phone: '',
      age:50
    }
  }

  ngOnInit() {
  }
  deleteUser(){

    this.userDeleted.emit(this.user);


  }
  updateUser(){
    console.log(this.user);
    this.onSelectUser.emit(this.user);

  }
}
