import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/User';
import { UserInterface } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = environment.APIURL;
  constructor(private http: HttpClient) {

  }
  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiurl);
  }
  getUser(id: number): Observable<User> {

    return this.http.get<User>(this.apiurl + '/' + id);
  }

  deleteUser(user: User) {
    return this.http.delete<User>(this.apiurl + '/' + user.id);
  }

  updateUser(user: UserInterface): Observable<User> {
    return this.http.put<User>(this.apiurl + '/' + user.id, user);
  }

  createUser(user: UserInterface): Observable<User> {

    return this.http.post<User>(this.apiurl, user);

  }
}
