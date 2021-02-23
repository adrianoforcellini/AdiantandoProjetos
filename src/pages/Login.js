import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../redux/store';

class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = this.auth.bind(this);
    this.regexTest = this.regexTest.bind(this);
  }

  auth() {
    const state = store.getState();
    const { Authenticated, Logout } = this.props;
    if (state.user.Senha === '123456') {
      Authenticated();
    } else {
      Authenticated();
      Logout();
    }
  }

  regexTest() {
    const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2})*/i;
    return !regex.test(store.getState().user.email);
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

            <button
              className="button"
              type="button"
              // disabled={ !regex.test(store.getState().user.email);}
            >
              <Link to="/carteira">Entrar</Link>
            </button>
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
  Logout: state.Authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  email: (email) => dispatch({ type: 'CHANGE_EMAIL', email }),
  Senha: (Senha) => dispatch({ type: 'CHANGE_SENHA', Senha }),
  Authenticated: (Authenticated) => dispatch({ type: 'AUTHENTICATED', Authenticated }),
  Logout: (Authenticated) => dispatch({ type: 'LOGOUT', Authenticated }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  Authenticated: PropTypes.bool.isRequired,
  Logout: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  Senha: PropTypes.string.isRequired,
};
