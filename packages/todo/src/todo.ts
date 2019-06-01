export function generateTodoModule(Module: any, state: any, action: any, computed: any) {
  interface Todo {
    text: string;
    completed?: boolean; 
  }

  interface State {
    list: Todo[];
    a: number;
    b: number;
  }

  class TodoList extends Module {
    @state a = 1;

    @state b = 1;

    @computed
    count = [
      () => this.a,
      () => this.b,
      (a: number, b: number) => {
        console.log('count => computing');
        return a + b;
      }
    ];

    @action
    increase(state: State) {
      state.a += 1; 
    }

    @state list: Todo[] = [{text:'test', completed: true}];

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
