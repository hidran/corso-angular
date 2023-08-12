import { User } from './../classes/User';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface Jwt {
  access_token: string,
  token_type: string
  expires_in: number,
  user_name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = '1234assssssss';
  private AUTH_API = environment.AUTH_API
  private isLoggedInSubject: BehaviorSubject<User | null>;
  public isLoggedIn$: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.isLoggedInSubject = new BehaviorSubject(this.getUser());
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  }
  signIn(email: string, password: string): Observable<User> {

    return this.http.post<Jwt>(this.AUTH_API + 'login', { email, password })
      .pipe(
        switchMap((response: Jwt) => {
          localStorage.setItem('jwt', response.access_token);
          console.log(response);
          const user = new User();
          user.name = response.user_name;
          user.email = response.email;
          this.isLoggedInSubject.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          return of(user);

        })
      );

  }
  signUp(username: string, email: string, password: string): Observable<User> {
    const user = new User();
    user.name = username;
    user.email = email;
    return this.http.post<Jwt>(this.AUTH_API + 'signup', { email, password, name: username }
    )
      .pipe(
        switchMap((response: Jwt) => {
          localStorage.setItem('jwt', response.access_token);
          console.log(response);

          this.isLoggedInSubject.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          return of(user);

        })
      );

  }
  isUserLogin(): boolean {
    return !!this.getUser();
  }
  logOut(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.isLoggedInSubject.next(null);
  }
  private getUser(): User | null {
    const userString = localStorage.getItem('user');
    if (!userString) {
      return null;
    }
    return JSON.parse(userString);
  }

  public getToken() {
    return localStorage.getItem('jwt')
  }
}
