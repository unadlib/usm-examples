<template>
  <div id="app">
    <a-input v-model="input"/>
    <a-button type="primary" @click="addTodo">Add</a-button>
    <a-list
      bordered
      :dataSource="list">
      <a-list-item
        slot="renderItem"
        slot-scope="item, index"
        :style="{textDecoration: item.completed ? 'line-through' : ''}" 
        @click="toggleTodo(index)">
        {{item.text}}
      </a-list-item>
    </a-list>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      input: '',
      list: this.$store.state.list,
    }
  },
  methods: {
    addTodo() {
      window.todo.add({ text: this.input, completed: false });
      this.input = '';
    },
    toggleTodo(index) {
      window.todo.toggle(index);
    }
  }  
}
</script>
