import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('http://localhost:3000/users');
  }

  removeUser(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }

  addUser(name: string): Observable<User> {
    const id = Math.random();
    const newUser: User = {
      name,
      id,
    };
    return this.http.post<User>('http://localhost:3000/users', newUser);
  }
}
