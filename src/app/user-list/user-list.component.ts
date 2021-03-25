import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor() {}
  public newUserName: string = '';
  public users: Array<string> = ['Jack', 'Jon', 'Sam'];
  public usersList: Array<{ name: string; id: number }> = [
    {
      name: 'Andy1',
      id: 1,
    },
    {
      name: 'Andy2',
      id: 2,
    },
    {
      name: 'Andy3',
      id: 3,
    },
    {
      name: 'Andy4',
      id: 4,
    },
  ];
  public testUser: string = 'I am a test user';
  ngOnInit(): void {}

  add(): void {
    let id =
      Math.max.apply(
        null,
        this.usersList.map((u) => u.id)
      ) + 1;

    this.usersList.push({ name: this.newUserName, id: id });

    this.newUserName = '';
  }
  remove(id: number): void {
    this.usersList = this.usersList.filter((c) => c.id !== id);
  }
}
