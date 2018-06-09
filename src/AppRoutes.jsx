import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { DasboardContainer, AuthContainer } from './containers';

export default class AppRoutes extends React.Component {

  state = {
    isLoggedIn: false
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/login' component={AuthContainer}/>
        <Redirect to="/login" />
      </Switch>
    )

    if (this.state.isLoggedIn) {
      routes = (
        <Switch>
          <Route exact path='/' component={DasboardContainer}/>
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <React.Fragment>
        {routes}
      </React.Fragment>
    )
  }
}
