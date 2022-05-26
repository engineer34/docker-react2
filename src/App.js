import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <h1> Learn React Tugba was changed on feature branch </h1>
      </header>
      <p className='App-intro'>HI there Tugba test!</p>
 
    </div>
  );
  }
}

export default App;
