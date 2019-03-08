export function generateTodoModule(name: string) {
  const { default: Module, state, action } = require(name);

  interface Todo {
    text: string;
    completed?: boolean; 
  }

  // type Visibility = 'All'|'Active'|'Completed';
  interface State {
    list: Todo[];
    // visibility: Visibility;
  }

  class TodoList extends Module implements State {  
    @state list: Todo[] = [];
    // @state visibility: Visibility = 'All';

    @action
    add(todo: Todo, state: State) {
        state.list.push(todo);
    }

    @action
    toggle(index: number, state: State){
      const todo = state.list.find((_,key) => key === index);
      if (typeof todo === 'object') {
        todo.completed = !todo.completed;
      }
    }

    // @action
    // clearCompleted(state: State){
    //   state.list = state.list.filter(todo => !todo.completed);
    // }

    // @action
    // remove(todo: Todo, state: State){
    //   const index = state.list.indexOf(todo);
    //   state.list.splice(index, 1);
    // }

    // @action
    // edit(todo: Todo, state: State) {
    //   const index = state.list.indexOf(todo);
    //   state.list[index].text = todo.text;
    // }
  }
  
  return TodoList;
}
