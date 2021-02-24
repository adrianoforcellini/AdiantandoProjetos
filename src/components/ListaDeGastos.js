import React, { Component } from 'react';

class ListaDeGastos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Despesas: 0,
    };
  }

  render() {
    const { Despesas } = this.state;
    return (
      <div data-testid="total-field">
        Total de Despesas:
        {' '}
        {Despesas}
      </div>
    );
  }
}

export default ListaDeGastos;
