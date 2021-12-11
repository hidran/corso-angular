import { UserService } from './../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  user: User | undefined
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = Number(param.id);
      const user = this.userService.getUser(id);
      if (user) {
        this.user = user;
      }
    });

  }

}
