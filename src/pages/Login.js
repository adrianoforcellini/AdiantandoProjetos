import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      Email: '',
      senha: '',
      buttonDisabled: true,
      email: '',
    };
    this.viewState = this.viewState.bind(this);
  }

  logado = () => {
    if (this.state.Email !== "" && this.state.password !== "") {
      this.setState({
        buttonDisabled: false,
      });
    } 
  };

  viewState() {
    console.log(this.state);
  }

  changeEmail = (event) => {
    const re = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+(\.[A-Za-z]{3}|\.[A-Za-z]{3}\.[A-Za-z]{2})$/;
    if (re.test(event.target.value)) {
      this.setState({
        Email: event.target.value,
      });
    }else{
      this.setState({
        Email: '',
      });
    }
  }

  changePassword = (event) => {
    const regexSenha = /\d{6,}/g;
    if (regexSenha.test(event.target.value)) {
      this.setState({
        senha: event.target.value,
      });
      this.logado();
    }else{
      this.setState({
        senha: 1,
      });
    }
  }

  render() {
    const { email } = this.props;
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
              onChange={ this.changeEmail }

              // onChange={ this.changeEmail }
            />
            <input
              className="input text"
              type="number"
              name="senha"
              placeholder="senha"
              data-testid="password-input"
              onChange={ this.changePassword }

            />
            <Link to="/carteira">
              <button
                className="button"
                type="button"
                disabled={ this.state.buttonDisabled }
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
