import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() usersList!: Array<{ name: string; id: number }>;
  @Output() removeUserEvent = new EventEmitter();
  @Output() addUserEvent = new EventEmitter();
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
