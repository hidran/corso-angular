import { AuthService } from './../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from "../classes/User";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter<null>();
  public isLoggedIn$: Observable<User | null>;
  public loggeout = true;
  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = authService.isLoggedIn$;
    this.isLoggedIn$.subscribe(res => console.log(res))
  }

  ngOnInit(): void {
  }
  newUser(evt: MouseEvent) {
    evt.preventDefault();
    this.onNewUser.emit();
  }
  login(): void {
    this.router.navigate(['/login']);
  }
  signup(): void {
    this.router.navigate(['/signup']);
  }
  logout(): void {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
