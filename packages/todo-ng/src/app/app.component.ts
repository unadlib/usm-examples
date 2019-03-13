import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input: string;
  constructor(
    public todoService: TodoService
  ) {}

  add(text) {
    this.todoService.add({ text, completed: false });
    this.input = '';
  }
}
