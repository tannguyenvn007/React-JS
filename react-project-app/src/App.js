import React, { Component } from 'react';

import './App.css';

import Header from './components/home/header';
import Banner from './components/home/banner';
import BestSeller from './components/home/best-seller';
class App extends Component {
  render() {
    return (
      <div className="page">
          <Header/>
          <Banner/>
          <BestSeller/>
      </div>
    );
  }
}

export default App;
