import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users.service';
import { User } from './types/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-try';
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.usersList = users;
    });
  }

  constructor(private userService: UserService) {
    this.usersList = [];
  }
  public usersList: Array<User>;

  remove(id: number): void {
    this.userService.removeUser(id).subscribe(() => {
      this.usersList = this.usersList.filter((c) => c.id !== id);
    });
  }

  add(name: string): void {
    this.userService.addUser(name).subscribe((u) => {
      this.usersList.push(u);
    });
  }
}
