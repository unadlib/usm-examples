import { Injectable } from '@angular/core';
import Module, { state, action, computed } from 'usm';
import { generateTodoModule } from '../../../todo/dist/todo';

const TodoModule = generateTodoModule(Module, state, action, computed);
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

