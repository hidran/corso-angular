import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface UsersResponse {
  data: User[];
  message: string;
}
export interface UserResponse {
  data: User;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = environment.APIURL;
  constructor(private http: HttpClient, private auth: AuthService) {

  }
  protected getAuthHeader(): HttpHeaders {
    return new HttpHeaders({
      Authorization: "Bearer " + this.auth.getToken()
    });
  }
  getUsers(): Observable<UsersResponse> {

    return this.http.get<UsersResponse>(this.apiurl);
  }
  getUser(id: number): Observable<UserResponse> {

    return this.http.get<UserResponse>(this.apiurl + '/' + id);
  }


  deleteUser(user: User): Observable<UserResponse> {
    return this.http.delete<UserResponse>(this.apiurl + '/' + user.id);
  }

  updateUser(user: UserInterface): Observable<UserResponse> {
    return this.http.put<UserResponse>(this.apiurl + '/' + user.id, user);
  }

  createUser(user: UserInterface): Observable<UserResponse> {

    return this.http.post<UserResponse>(this.apiurl, user);

  }
}
