<template>
  <div id="app">
    <a-input v-model="input"/>
    <a-button type="primary" @click="addTodo">Add</a-button>
    <a-list
      bordered
      :dataSource="list">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index">
        <a-icon type="close" @click="removeTodo(index)" />
        <span
          :style="{textDecoration: item.completed ? 'line-through' : ''}" 
          @click="toggleTodo(index)">
          {{item.text}}
        </span>
      </a-list-item>
    </a-list>
    <b @click="increase()">{{count}}</b>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      input: '',
    }
  },
  computed: {
      list() { return this.todo.list },
      count() { return this.todo.count },
  },
  methods: {
    addTodo() {
      this.todo.add({ text: this.input, completed: false });
      this.input = '';
    },
    toggleTodo(index) {
      this.todo.toggle(index);
    },
    removeTodo(index) {
      this.todo.remove(index);
    },
    increase() {
      this.todo.increase();
    }
  }  
}
</script>
