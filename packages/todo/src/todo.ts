export function generateTodoModule(Module: any, state: any, action: any) {
  interface Todo {
    text: string;
    completed?: boolean; 
  }

  interface State {
    list: Todo[];
  }

  class TodoList extends Module implements State {  
    @state list: Todo[] = [{text:'test', completed: false}];

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
  }
  
  return TodoList;
}
