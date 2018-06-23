import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as logoutActions from '../../../store/actions';

export class LogoutComponent extends React.Component {

  componentDidMount = () => {
    localStorage.clear();
    this.props.onLogout();
  }
  
  render() {
    return (
      <Redirect to="/login" />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logoutActions.logout())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LogoutComponent));
