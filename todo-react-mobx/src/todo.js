import Module, { state, action } from 'usm-mobx';

export default class TodoList extends Module {  
  @state list = [];

  @action
  add(todo, state) {
      state.list.push(todo);
  }

  @action
  toggle(index, state){
    const todo = state.list.find((_,key) => key === index);
    if (typeof todo === 'object') {
      todo.completed = !todo.completed;
    }
  }
}