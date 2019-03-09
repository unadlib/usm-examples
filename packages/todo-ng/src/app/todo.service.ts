import { Injectable } from '@angular/core';
import Module, { state, action } from 'usm';
import { generateTodoModule } from 'todo';

const TodoModule = generateTodoModule(Module, state, action);
// temp type
interface TodoService {
  list: [];
  add(any): any;
  toggle(any): any;
}

@Injectable({
  providedIn: 'root'
})
class TodoService extends TodoModule {}

export {
  TodoService
};

