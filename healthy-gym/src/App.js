import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import IntroPane from './components/IntroPane/IntroPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <IntroPane/>
      </div>
    );
  }
}

export default App;
