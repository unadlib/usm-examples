import React, { useState } from 'react';
import { Button, Input, List, Icon } from 'antd';
import { observer } from 'mobx-react'
import './App.css';

const TodoList = observer((props) => 
  <>
    <List
      bordered>
      {
        // mobx for ant list bugs.
        props.todo.list.map((item, index) =>
          <List.Item
            key={index}>
            <Icon type="close" onClick={() => window.todo.remove(index)}  />
            <span
              style={{textDecoration: item.completed ? 'line-through' : ''}}
              onClick={() => window.todo.toggle(index)}>
              {item.text}
            </span>
          </List.Item>
        )
      }
    </List>
    <b onClick={() => props.todo.increase()}>{props.todo.count}</b>
  </>
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
