import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ad from '../Ad/Ad'
import Ads from '../Ads/Ads'
import LoginContainer from '../../containers/LoginContainer'
import Register from '../Register/Register'
import NavBar from '../NavBar/NavBar'
import AddButton from '../AddButton/AddButton'
import './App.css'
import PrivateRoute from '../PrivateRoute/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/ads" component={NavBar} />
          <PrivateRoute path="/ads" component={AddButton} />
          <Switch>
            <PrivateRoute path="/ads/:id" component={Ad} />
            <PrivateRoute path="/ads" component={Ads} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
