import React, { Component } from 'react';
import store from '../redux/store';

class Header extends Component {
  render() {
    return (
      <header>
        <p data-testid="email-field">
          store.getState().user.email
          {store.getState().user.email}
        </p>
      </header>
    );
  }
}

export default Header;
