import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import NotFound from '../pages/404';
import Wallet from '../pages/Wallet';
// import Loginst from "./Loginst";
import PrivateRoute from './privateRoute';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <PrivateRoute path="/carteira" component={ Wallet } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
