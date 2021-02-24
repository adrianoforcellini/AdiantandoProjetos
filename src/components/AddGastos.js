import React, { Component } from 'react';

class AddGastos extends Component {
  render() {
    return (

      <input
        type="text"
        name="addGastos"
        placeholder="digite o gasto a ser adicionado"
        data-testid="password-input"
        onChange={ this.changeGastos }
      />

    );
  }
}

export default AddGastos;
