import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../redux/store';

class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = this.auth.bind(this);
  }

  auth() {
    const state = store.getState();
    const { Authenticated, Logout } = this.props;
    if (state.user.Senha === 'aa' && state.user.Email === 'aa') {
      Authenticated();
    } else {
      Logout();
    }
  }

  render() {
    const { Email, Senha } = this.props;
    return (
      <div className="login">
        <main className="main">
          <div className="form">
            <h1>Faça login usando sua conta</h1>
            <input
              className="input text"
              type="text"
              name="email"
              placeholder="e-mail"
              onChange={ ({ target }) => Email(target.value) && this.auth() }
            />
            <input
              className="input text"
              type="text"
              name="senha"
              placeholder="senha"
              onChange={ ({ target }) => Senha(target.value) && this.auth() }
            />

            <button className="button" type="button">
              <Link to="/carteira">Realizar Cadastros \o/</Link>
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
  return false;
}

const mapStateToProps = (state) => ({
  Email: state.Email,
  Senha: state.Senha,
  Authenticated: state.Authenticated,
  Logout: state.Authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  Email: (Email) => dispatch({ type: 'CHANGE_EMAIL', Email }),
  Senha: (Senha) => dispatch({ type: 'CHANGE_SENHA', Senha }),
  Authenticated: (Authenticated) => dispatch({ type: 'AUTHENTICATED', Authenticated }),
  Logout: (Authenticated) => dispatch({ type: 'LOGOUT', Authenticated }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  Authenticated: PropTypes.bool.isRequired,
  Logout: PropTypes.bool.isRequired,
  Email: PropTypes.string.isRequired,
  Senha: PropTypes.string.isRequired,
};
