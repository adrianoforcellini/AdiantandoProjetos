import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../redux/store';

class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = this.auth.bind(this);
    this.Re = this.Re.bind(this);
  }

  auth() {
    const state = store.getState();
    const { Authenticated, Logout } = this.props;
    console.log('aut');
    if (state.user.Senha === '123456' && state.user.email === 'alguem@email.com') {
      Authenticated();
      this.Re();
    } else {
      Logout();
      this.Re();
    }
  }

  Re() {
    const state = store.getState();
    const { Disabled, Abled } = this.props;
    const reg = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+(\.[A-Za-z]{3}|\.[A-Za-z]{3}\.[A-Za-z]{2})$/;
    if (reg.test(state.user.email) === true) {
      Disabled();
    } else {
      Abled();
    }
  }

  render() {
    const { email, Senha } = this.props;
    return (
      <div className="login">
        <main className="main">
          <div className="form">
            <h1>Faça login usando sua conta</h1>
            <input
              className="input text"
              type="email"
              name="email"
              placeholder="e-mail"
              data-testid="email-input"
              onChange={ ({ target }) => email(target.value) && this.auth() }
            />
            <input
              className="input text"
              type="text"
              name="senha"
              placeholder="senha"
              data-testid="password-input"
              onChange={ ({ target }) => Senha(target.value) && this.auth() }
            />
            <Link to="/carteira">
              <button
                className="button"
                type="button"
                disabled={ false }
              >
                Entrar
              </button>
            </Link>
          </div>
        </main>
      </div>
    );
  }
}

export function authenticated() {
  const state = store.getState();
  if (state.user.Authenticated === true) {
    return true;
  }
  return true;
}

const mapStateToProps = (state) => ({
  email: state.email,
  Senha: state.Senha,
  Authenticated: state.Authenticated,
  ButtonDisabled: state.ButtonDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  email: (email) => dispatch({ type: 'CHANGE_EMAIL', email }),
  Senha: (Senha) => dispatch({ type: 'CHANGE_SENHA', Senha }),
  Authenticated: (Authenticated) => dispatch({ type: 'AUTHENTICATED', Authenticated }),
  Logout: (Authenticated) => dispatch({ type: 'LOGOUT', Authenticated }),
  Disabled: (ButtonDisabled) => dispatch({ type: 'DISABLED', ButtonDisabled }),
  Abled: (ButtonDisabled) => dispatch({ type: 'ABLED', ButtonDisabled }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  Authenticated: PropTypes.func.isRequired,
  Logout: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  Senha: PropTypes.string.isRequired,
  Disabled: PropTypes.func.isRequired,
  Abled: PropTypes.func.isRequired,
};
