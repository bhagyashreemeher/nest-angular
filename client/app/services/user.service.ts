import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../shared/models/user.model';

@Injectable({providedIn : "root"})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user);
  }

  login(credentials): Observable<any> {
    return this.http.post('/api/users/login', credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  countUsers(): Observable<number> {
    return this.http.get<number>('/api/users/count');
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users/add', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`/api/users/${user._id}`);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`/api/users/${user._id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(`/api/users/${user._id}`, { responseType: 'text' });
  }

}
