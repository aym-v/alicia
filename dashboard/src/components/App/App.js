import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ad from '../Ad/Ad'
import Ads from '../Ads/Ads'
import Login from '../Login/Login'
import Register from '../Register/Register'
import NavBar from '../NavBar/NavBar'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/ads" component={NavBar} />
          <Switch>
            <Route path="/ads/:id" component={Ad} />
            <Route path="/ads" component={Ads} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
