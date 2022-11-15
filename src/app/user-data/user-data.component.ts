import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInterface } from '../interfaces/user';
import {UserResponse, UserService} from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public user: UserInterface | undefined;

  constructor(private userService: UserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id')); // '12'
      this.userService.getUser(id)
        .subscribe((userResponse:UserResponse) => this.user = userResponse.data)


    });
  }

}
