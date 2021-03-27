import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-try';
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
