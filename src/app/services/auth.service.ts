import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signIn(email: string, password: string): void {

  }
  signUp(username: string, email: string, password: string): void {

  }
  isUserLogin(): boolean {
    return false;
  }
  logOut(): void {

  }
}
