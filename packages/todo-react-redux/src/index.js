import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Module, { state, action, computed } from 'usm-redux';
import { generateTodoModule } from '../../todo/dist/todo';

const Todo = generateTodoModule(Module, state, action, computed);
export const todo = Todo.create();

ReactDOM.render(
  <Provider store={todo.store}>
    <App todo={todo} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
