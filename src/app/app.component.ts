import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PartialObserver } from 'rxjs';
import { User } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-try';
  ngOnInit(): void {
    this.http
      .get<Array<User>>('http://localhost:3000/users')
      .subscribe((users) => {
        this.usersList = users;
      });
  }

  constructor(private http: HttpClient) {
    this.usersList = [];
  }
  public usersList: Array<User>;

  remove(id: number): void {
    this.usersList = this.usersList.filter((c) => c.id !== id);
  }

  add(name: string): void {
    let id =
      Math.max.apply(
        null,
        this.usersList.map((u) => u.id)
      ) + 1;

    this.usersList.push({ name, id });
  }
}
