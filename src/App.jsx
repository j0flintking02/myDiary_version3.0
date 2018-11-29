import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import store from './store';
import { SignUP } from './views/signUp';
import Home from './views/home';
import Notfound from './views/notfound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUP} />
            <Route component={Notfound} />
            <Route exact path="/404" component={Notfound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
