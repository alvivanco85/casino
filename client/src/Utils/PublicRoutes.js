import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';
import Pages from '../Pages/HomePage';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Pages {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
  )
}

export default PublicRoute;