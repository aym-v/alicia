import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ad from '../Ad/Ad'
import LoginContainer from '../../containers/LoginContainer'
import AddButton from '../AddButton/AddButton'
import './App.css'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NavBarContainer from '../../containers/NavBarContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import AdsContainer from '../../containers/AdsContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <PrivateRoute path="/ads" component={NavBarContainer} />
          <PrivateRoute path="/ads" component={AddButton} />
          <Switch>
            <PrivateRoute path="/ads/:id" component={Ad} />
            <PrivateRoute path="/ads" component={AdsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
