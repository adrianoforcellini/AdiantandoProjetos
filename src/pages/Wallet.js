import React, { Component } from 'react';
import Header from '../components/Header';
import ListaDeGastos from '../components/ListaDeGastos';
import Cambio from '../components/Cambio';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListaDeGastos />
        <Cambio />

      </div>
    );
  }
}

export default Wallet;
