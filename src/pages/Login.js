import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      buttonDisabled: true,
    };
    this.logado = this.logado.bind(this);
    this.change = this.change.bind(this);
    this.viewState = this.viewState.bind(this);
  }

  logado() {
    const { email, senha } = this.state;
    const te = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+(\.[A-Za-z]{3}|\.[A-Za-z]{3}\.[A-Za-z]{2})$/;
    const regexEmail = te;
    const regexSenha = /\d{5,}/g;
    if (regexEmail.test(email) === true && regexSenha.test(senha) === true) {
      this.setState({
        buttonDisabled: false,
      });
    }
  }

  viewState() {
    console.log(this.state);
  }

  change(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    setTimeout(() => {
      this.logado()
    }, 0.1);
  }

  render() {
    const { buttonDisabled } = this.state;
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
              onChange={ this.change }
            />
            <input
              className="input text"
              type="number"
              name="senha"
              placeholder="senha"
              data-testid="password-input"
              onChange={ this.change }

            />
            <Link to="/carteira">
              <button
                className="button"
                type="button"
                disabled={ buttonDisabled }
              >
                Entrar
              </button>
            </Link>
            <button type="button" onClick={ this.viewState }>view state</button>

          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  email: (email) => dispatch({ type: 'CHANGE_EMAIL', email }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
