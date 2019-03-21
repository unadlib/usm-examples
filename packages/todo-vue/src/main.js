import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// import Todo from './todo'
import { generateTodoModule } from '../../todo/dist/todo'
import Module, { state, action, computed } from 'usm-vuex'
const Todo = generateTodoModule(Module, state, action, computed)

Vue.config.productionTip = false
Vue.use(Antd)
export const todo = Todo.create()

new Vue({
  store: todo.store,
  render: h => h(App),
}).$mount('#app')
