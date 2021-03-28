import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../types/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() usersList!: Array<User>;
  @Output() removeUserEvent = new EventEmitter<number>();
  @Output() addUserEvent = new EventEmitter<string>();
  constructor() {}
  public newUserName: string = '';
  public users: Array<string> = ['Jack', 'Jon', 'Sam'];
  public testUser: string = 'I am a test user';
  ngOnInit(): void {}

  add(): void {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = '';
  }
  remove(id: number): void {
    this.removeUserEvent.emit(id);
  }
}
