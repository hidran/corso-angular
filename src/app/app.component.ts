import { Component } from '@angular/core';
import {User} from "./interfaces/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello';
  name = 'Hidran';
  userSelected: User | undefined;
  updateUser(user: User){
    this.userSelected = user;
  }
}
