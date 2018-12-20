import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import IntroPane from './components/IntroPane/IntroPane';
import DescriptionPane from './components/DescriptionPane/DescriptionPane';
import PricingPane from './components/PricingPane/PricingPane';
import FeaturePane from './components/FeaturePane/FeaturePane';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <IntroPane/>
        <DescriptionPane/>
        <PricingPane/>
        <FeaturePane/>
      </div>
    );
  }
}

export default App;
