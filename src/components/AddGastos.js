import React, { Component } from 'react';

class AddGastos extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="addGastos"
          placeholder="digite o gasto a ser adicionado"
          data-testid="password-input"
          onChange={ this.changeGastos }
        />
        <input
          type="text"
          name="descricao"
          placeholder="detalhe aqui  o gasto acima"
          data-testid="description-input"
          onChange={ this.changeDescription }
        />

        <select data-testid="currency-input" name="moeda">
          <option data-testid="USD" value="USD">USD</option>
          <option data-testid="CAD" value="CAD">CAD</option>
          <option data-testid="EUR" value="EUR">EUR</option>
          <option data-testid="GBP" value="GBP">GBP</option>
          <option data-testid="ARS" value="ARS">ARS</option>
          <option data-testid="BTC" value="BTC">BTC</option>
          <option data-testid="LTC" value="LTC">LTC</option>
          <option data-testid="JPY" value="JPY">JPY</option>
          <option data-testid="CHF" value="CHF">CHF</option>
          <option data-testid="AUD" value="AUD">AUD</option>
          <option data-testid="CNY" value="CNY">CNY</option>
          <option data-testid="ILS" value="ILS">ILS</option>
          <option data-testid="XRP" value="XRP">XRP</option>
          <option data-testid="ETH" value="ETH">ETH</option>
        </select>
      </div>
    );
  }
}

export default AddGastos;
