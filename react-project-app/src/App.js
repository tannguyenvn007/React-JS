import React, { Component } from 'react';

import './App.css';

import Header from './components/global/header';

import Footer from './components/global/footer';
import routes from './router';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="page">
          <Header/>
          {this.showContent(routes)}
          <Footer/>
      </div>
      </Router>
      
    );
    
    
  }
  showContent = (routes) => {
    var result = '';
    console.log(routes);
    console.log(routes.lenght);
    if(routes.length > 0){
      
      result = routes.map((route, index) => {
        return (
        <Route key={index}
                path={route.path}
                exact = {route.exact}
                component = {route.main}
        />)
      });
    }
    
    return <Switch>{result}</Switch>;
    
    
  }
  
}

export default App;
