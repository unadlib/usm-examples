import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Todo from './todo'

Vue.config.productionTip = false
Vue.use(Antd)
const todo = Todo.create()
window.todo = todo

new Vue({
  store: todo.store,
  render: h => h(App),
}).$mount('#app')
