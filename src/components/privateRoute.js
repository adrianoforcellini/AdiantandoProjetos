import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authenticated } from '../pages/Login';

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={ () => (authenticated() ? <Component /> : <Redirect to="/loginst" />) }
  />
);

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.string.isRequired,
};
