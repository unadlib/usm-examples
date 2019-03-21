import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Button, Input, List, Icon } from 'antd';
import './App.css';
import { todo } from './';

export default connect(
  (state, props) => ({
    list: state.list,
    count: props.todo.count,
  })
)( props => {
  const [state, setState] = useState('');
  return (
    <div className="App">
      <Input value={state} onChange={e => setState(e.target.value)}/>
      <Button type="primary" onClick={() => {
        todo.add({ text: state });
        setState('');
      }}>Add</Button>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => 
          <List.Item
            key={index}>
            <Icon type="close" onClick={() => todo.remove(index)}  />
            <span
              style={{textDecoration: item.completed ? 'line-through' : ''}}
              onClick={() => todo.toggle(index)}>
              {item.text}
            </span>
          </List.Item>
        }
      />
      <b onClick={() => todo.increase()}>{props.count}</b>
    </div>
  )
});
