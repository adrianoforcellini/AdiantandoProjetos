import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ListaDeGastos from '../components/ListaDeGastos';
import Cambio from '../components/Cambio';
import AddGastos from '../components/AddGastos';

class Wallet extends Component {

  render() {
    const {newState} = this.props;
    return (
      <div className="flex-container">
        <div className="child1">
          <Header />
        </div>
        <div className="child2">
          <ListaDeGastos />
        </div>
        <div className="child3">
          <Cambio />
        </div>
        <div className="child4">
          <AddGastos />
        </div>
        <button
          type="button"
          onClick={ () => {
            newState(this.state);
          } }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  newState: (newState) => dispatch({ type: 'ADD_DESPESA', newState }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
