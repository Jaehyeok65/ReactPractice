import React, { Component } from 'react';
import './App.css';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent objValue={{ age : '20살'}}
        requiredStringValue="문자"
        />
      </div>
    );
  }
}

export default App;
