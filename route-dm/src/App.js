import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';


// Home component
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

// Category component
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

// Product component
const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
         {/* Demo - 01 - Basic-routing*/}
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            {/* Link components are used for linking to other views  */}
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
         </nav>
         {/* Route components are rendered if the path prop matches the current URL */ }
         {/* exact={true} to avoid / and /category render at the same time */}
         {/* Switch allow the first Route that matches the location gets rendered */}
         <Switch>
          <Route exact={true} path="/" component={Home}/> 
          <Route path="/category" component={Category}/>
          <Route path="/products" component={Product}/>
          <Route path="/:id" render = {()=> (
          <p> I want this text to show up for all routes other than '/', '/products' and '/category' </p>
          )}/>
         </Switch>
      </div>
      </div>
      
      
    );
  }
}

export default App;
