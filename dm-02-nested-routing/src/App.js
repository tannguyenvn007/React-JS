import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom'; 
import Category from './Category';
import Products from './Products';
import { Redirect } from 'react-router-dom';
import  Login, { fakeAuth }  from './Login';

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
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
       </nav>
       <Switch>
         <Route path="/login" component={Login}/> 
         <Route exact path="/" component={Home}/>
         <Route path="/category" component={Category}/>
         <Route path="/products" component={Products}/>
         <PrivateRoute authed={fakeAuth.isAuthenticated} path='/admin' component = {Admin}/>
       </Switch>
        </div>
      </div>
    );
  }
}
const Home = (props) => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>  
)
const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route {...rest} render={(props) => authed === true?<Component {...props}/> : 
      <Redirect to={{pathname: '/login', state: {from: props.location}}}  />
  }/>
  )
}
const Admin = () => (
  <div>
    <h2>Welcome</h2>
  </div>
)
export default App;
