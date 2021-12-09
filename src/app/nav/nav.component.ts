import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../classes/User";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 @Output() onNewUser = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }
  newUser(evt: MouseEvent) {
    evt.preventDefault();
    this.onNewUser.emit();
  }
}
