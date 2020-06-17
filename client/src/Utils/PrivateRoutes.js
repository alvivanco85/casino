import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import Pages from '../Pages/LoginPage'

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Pages {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;