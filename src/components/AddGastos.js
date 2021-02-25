import React, { Component } from 'react';

const inputsGastos = () => (
  <div>
    <input
      type="text"
      name="addGastos"
      placeholder="digite o gasto a ser adicionado"
      data-testid="value-input"
      // onChange={ this.changeGastos }
    />
    <br />
    <input
      type="text"
      name="descricao"
      placeholder="detalhe aqui  o gasto acima"
      data-testid="description-input"
      // onChange={ this.changeDescription }
    />
  </div>
);

function tipoDeMoeda() {
  return (
    <div>
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
    </div>);
}

function metodoPagamento() {
  return (
    <select data-testid="method-input" name="metodo">
      <option value="Dinheiro">Dinheiro</option>
      <option value="Cartão de crédito">Cartão de crédito</option>
      <option value="Cartão de débito">Cartão de débito</option>
    </select>);
}

function categoriaDespesa() {
  return (
    <select data-testid="tag-input" name="categoria">
      <option value="Alimentação">Alimentação</option>
      <option value="Lazer">Lazer</option>
      <option value="Trabalho">Trabalho</option>
      <option value="Transporte">Transporte</option>
      <option value="Saúde">Saúde</option>

    </select>);
}

class AddGastos extends Component {
  render() {
    return (
      <div>
        {inputsGastos()}
        <br />
        {tipoDeMoeda()}
        <br />
        {metodoPagamento()}
        <br />
        {categoriaDespesa()}
      </div>
    );
  }
}

export default AddGastos;
