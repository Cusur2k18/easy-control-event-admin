import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { DasboardContainer, AuthContainer } from './containers';

export class AppRoutes extends React.Component {

  render() {

    let routes = (
      <Switch>
        <Route path='/login' component={AuthContainer}/>
        <Redirect to="/login" />
      </Switch>
    )

    if (this.props.isLoggedIn) {
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


const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default withRouter(connect(mapStateToProps, null)(AppRoutes));
