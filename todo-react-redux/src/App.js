import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import './App.css';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Button type="primary">Button</Button>
        <List
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default App;
