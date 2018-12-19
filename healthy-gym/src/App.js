import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import IntroPane from './components/IntroPane/IntroPane';
import DescriptionPane from './components/DescriptionPane/DescriptionPane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <IntroPane/>
        <DescriptionPane/>
      </div>
    );
  }
}

export default App;
