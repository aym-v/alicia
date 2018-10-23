import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" render={() => <h3>login</h3>} />
          <Switch>
            <Route path="/ads/:id" render={() => <h3>ads/id</h3>} />
            <Route path="/ads" render={() => <h3>ads</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
