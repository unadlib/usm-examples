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
      const todo = state.list[index];
      todo.completed = !todo.completed;
    }
    
    @action
    edit(text: string, index: number, state: State) {
      state.list[index].text = text;
    }
  
    @action
    remove(index: number, state: State) {
      state.list.splice(index, 1);
    }
  
    @action
    clearAllCompleted(state: State) {
      state.list = state.list.filter(({ completed }) => !completed);
    }
  }
  
  return TodoList;
}
