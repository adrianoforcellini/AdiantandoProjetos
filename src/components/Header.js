import React, { Component } from 'react';
import store from '../store';

class Header extends Component {
  render() {
    const email = store.getState().user.email;
    return (
      <header>
        <p data-testid="email-field">
          {email}
        </p>

      </header>
    );
  }
}

export default Header;
