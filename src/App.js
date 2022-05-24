import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <h1> Learn React Tugba </h1>
      </header>
      <p className='App-intro'>HI there Tugba!</p>
 
    </div>
  );
  }
}

export default App;
