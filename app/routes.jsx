import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'App.js';
import RootIndex from 'root/index/RootIndex';
import Dashboard from 'dashboard/Dashboard';
import Directions from 'routes/Directions';
import SignIn from 'authorization/SignIn';
import SignUp from 'authorization/SignUp';

import { Provider } from 'react-redux';
import store from './store';

export default (
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/sign_in" component={SignIn} />
      <Route path="/sign_up" component={SignUp} />
      <Route component={App}>

        <Route path="/:user" component={RootIndex}>
          <IndexRoute component={Dashboard} />
          {Directions}
        </Route>

      </Route>
    </Router>
  </Provider>
);
