import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class AppRoutes extends React.Component {

  state = {
    isLoggedIn: true
  }

  render() {

    let routes = (
      <Switch>
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
