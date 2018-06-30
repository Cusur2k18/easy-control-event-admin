import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { 
  DasboardContainer, 
  AuthContainer, 
  EventsContainer,
  AdminContainer,
  AccountContainer
} from './containers';
import { LogoutComponent, PrivateRoute } from './components';

export class AppRoutes extends React.Component {

  render() {

    let routes = (
      <Switch>
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/" component={DasboardContainer} />

        <PrivateRoute exact authed={this.props.isLoggedIn} path="/admin" component={AdminContainer} />
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/admin/:segment" component={AdminContainer} />
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/admin/:segment/create" component={AdminContainer} />

        <PrivateRoute exact authed={this.props.isLoggedIn} path="/account" component={AccountContainer} />
        
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/events" component={EventsContainer} />
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/events/create" component={EventsContainer} />
        <PrivateRoute exact authed={this.props.isLoggedIn} path="/events/:id" component={EventsContainer} />
        <Route path="/login" component={AuthContainer}/>
        <Route path="/logout" component={LogoutComponent}/>
        <Redirect to="/account" />
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
