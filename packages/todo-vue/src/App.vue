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
import { todo } from './main';

export default {
  name: 'app',
  data () {
    return {
      input: '',
    }
  },
  computed: {
      list() { return this.$store.state.list },
      count() { return this.$store.getters.count },
  },
  methods: {
    addTodo() {
      todo.add({ text: this.input, completed: false });
      this.input = '';
    },
    toggleTodo(index) {
      todo.toggle(index);
    },
    removeTodo(index) {
      todo.remove(index);
    },
    increase() {
      todo.increase();
    }
  }  
}
</script>
