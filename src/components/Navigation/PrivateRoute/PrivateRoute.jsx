import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';


export default withRouter(({component: Component, authed, ...rest}) => {
  
  return (
    <Route
      {...rest}
      render={(props) => authed 
        ? <Component {...props} />
        : <Redirect to="/login" />}
    />
  )
})
