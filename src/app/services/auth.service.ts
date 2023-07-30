import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '1234assssssss';

  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn$: Observable<boolean>;

  constructor() {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }
  signIn(email: string, password: string): void {

    localStorage.setItem('jwt', this.token);
    this.isLoggedInSubject.next(true);

  }
  signUp(username: string, email: string, password: string): void {
    localStorage.setItem('jwt', this.token);
    this.isLoggedInSubject.next(true);
  }
  isUserLogin(): boolean {
    return this.hasToken();
  }
  logOut(): void {
    localStorage.removeItem('jwt');
    this.isLoggedInSubject.next(false);
  }
  private hasToken(): boolean {
    return Boolean(localStorage.getItem('jwt'));
  }
}
