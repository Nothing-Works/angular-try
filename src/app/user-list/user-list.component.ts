import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor() {}
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
}
