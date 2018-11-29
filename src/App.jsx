import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import store from './store';
import SignUP from './views/signUp';
import Home from './views/home';
import Description from './views/description';
import AddEntry from './views/addEntry';
import updateEntry from './views/update';
import Login from './views/login';
import Notfound from './views/notfound';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/description/:id" component={Description} />
            <Route exact path="/updateEntry/:id" component={updateEntry} />
            <Route exact path="/addEntry" component={AddEntry} />
            <Route exact path="/signup" component={SignUP} />
            <Route exact path="/login" component={Login} />
            <Route component={Notfound} />
            <Route exact path="/404" component={Notfound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
