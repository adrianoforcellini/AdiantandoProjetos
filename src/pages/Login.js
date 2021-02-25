import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      Email: "",
      senha: "",
      buttonDisabled: true,
      email: "",
    };
  }

  logado = () => {
    if (this.state.Email !== "" && this.state.senha !== "") {
      this.setState({
        buttonDisabled: false,
      });
    }
  }

  viewState = () => {
    console.log(this.state);
  }

  changeEmail = (event) => {
    const re = /^[A-Za-z0-9.-]+@[A-Za-z0-9]+(\.[A-Za-z]{3}|\.[A-Za-z]{3}\.[A-Za-z]{2})$/;
    if (re.test(event.target.value)) {
      this.setState({
        Email: event.target.value,
      });
     this.logado();
    } else {
      this.setState({
        Email: "",
      });
    }
  }

  changePassword = (event) => {
    const regexSenha = /\d{5,}/g;
    if (regexSenha.test(event.target.value)) {
      this.setState({
        senha: event.target.value,
      });
      this.logado();
    } else {
      this.setState({
        senha: "",
      });
    }
  }

  render() {
    const { email, history } = this.props;
    const { Email, buttonDisabled } = this.state;

    return (
      <div className='login'>
        <main className='main'>
          <div className='form'>
            <h1>Faça login usando sua conta</h1>
            <input
              className='input text'
              type='email'
              name='email'
              placeholder='e-mail'
              data-testid='email-input'
              onChange={this.changeEmail}
            />
            <input
              className='input text'
              type='number'
              name='senha'
              placeholder='senha'
              data-testid='password-input'
              onChange={this.changePassword}
            />
            <button
              className='button'
              type='button'
              disabled={buttonDisabled}
              onClick={() => {
                email(Email);
                history.push("/carteira");
              }}>
              Entrar
            </button>
            <button type='button' onClick={this.viewState}>
              view state
            </button>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
})

const mapDispatchToProps = (dispatch) => ({
  email: (email) => dispatch({ type: "CHANGE_EMAIL", email }),
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Foi imprencidivel na desenvoltura desse projeto o compartilhamento de informações e a
// constante ajúda mútua entre mim e meus colegas.
//  Meus agradecimento á Arnaelcio Gomes, que fez com tal proeza os regex necessarios.
//  Meus agradecimento á Ana Karine que mostrou a beleza das arrows no lugar dos binds e
//  encontrou sozinha os elses que faltavam, 
//  Meus agradecimento á Lucas Ribeiro  que me nos deu no momento inicial uma incrível explanação
//  que esclareceu muito sobre o funcionamento do Redux.
//  Tenho crescido muito com voces e estou muito feliz e orgulhoso de fazer parte deste crescimento.
//  Mal posso esperar pra encontrar cada um de voces, fisicamente ou nao, em nosso futuro
// proximo e próspero. 
// Estes são só alguns pequenos exemplos de tudo que conversamos,
// e essa só uma pequena demonstração de minha enorme gratidão. VQV
