import { Injectable } from '@angular/core';
import Module, { state, action } from 'usm';

interface Todo {
  text: string;
  completed?: boolean; 
}

interface State {
  list: Todo[];
}

@Injectable({
  providedIn: 'root'
})
class TodoService extends Module {  
  @state list: Todo[];

  @action
  add(todo: Todo, state?: State) {
      state.list.push(todo);
  }

  @action
  toggle(index: number, state?: State){
    const todo = state.list.find((_,key) => key === index);
    if (typeof todo === 'object') {
      todo.completed = !todo.completed;
    }
  }
}

Object.defineProperties(TodoService.prototype, {
  _state: {
    enumerable: true,
    configurable: true,
    value: {
      list: [],
    }
  }
});

export {
  TodoService
};

