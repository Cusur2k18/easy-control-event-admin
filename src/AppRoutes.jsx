import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
  DasboardContainer, 
  AuthContainer, 
  EventsContainer 
} from './containers';
import { LogoutComponent, PrivateRoute } from './components';

export class AppRoutes extends React.Component {

  render() {

    let routes = (
      <Switch>
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/" component={DasboardContainer} />
        <PrivateRoute authed={this.props.isLoggedIn} path="/my-events" component={EventsContainer} />
        <Route path="/login" component={AuthContainer}/>
        <Route path="/logout" component={LogoutComponent}/>
        <Redirect to="/" />
      </Switch>
    )

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
