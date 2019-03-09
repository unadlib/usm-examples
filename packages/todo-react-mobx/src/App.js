import React, { useState } from 'react';
import { Button, Input, List } from 'antd';
import { observer } from 'mobx-react'
import './App.css';

const TodoList = observer((props) => 
  <List
    bordered>
  {
    // mobx for ant list bugs.
    props.todo.list.map((item, index) =>
      <List.Item
        key={index}
        style={{textDecoration: item.completed ? 'line-through' : ''}}
        onClick={() => window.todo.toggle(index)}>
        {item.text}
      </List.Item>
    )
  }
  </List>
);

export default ( props => {
  const [state, setState] = useState(''); 
  return (
    <div className="App">
      <Input value={state} onChange={e => setState(e.target.value)}/>
      <Button type="primary" onClick={() => {
        window.todo.add({ text: state });
        setState('');
      }}>Add</Button>
      <TodoList todo={props.todo}/>
    </div>
  )
});
