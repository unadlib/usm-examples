import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Button, Input, List } from 'antd';
import './App.css';

export default connect(
  state => ({
    list: state.list
  })
)( props => {
  const [state, setState] = useState('');
  return (
    <div className="App">
      <Input value={state} onChange={e => setState(e.target.value)}/>
      <Button type="primary" onClick={() => {
        window.todo.add({ text: state });
        setState('');
      }}>Add</Button>
      <List
        bordered
        dataSource={props.list}
        renderItem={(item, index) => 
          <List.Item 
            style={{textDecoration: item.completed ? 'line-through' : ''}}
            onClick={() => window.todo.toggle(index)}>
            {item.text}
          </List.Item>
        }
      />
    </div>
  )
});
