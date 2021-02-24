import React, { Component } from 'react';

class AddGastos extends Component {
  render() {
    return (
      <div>
        <input
          className="input text"
          type="number"
          name="addGastos"
          placeholder="digite o gasto a ser adicionado"
          data-testid="password-input"
          onChange={ this.changeGastos }
        />
      </div>
    );
  }
}

export default AddGastos;
