import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as logoutActions from '../../../store/actions';

export class LogoutComponent extends React.Component {

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    localStorage.clear();
    console.log('TCL: logout -> token', token);
    this.props.onLogout(token);
  }
  
  render() {
    return (
      <Redirect to="/login" />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: (token) => dispatch(logoutActions.logout(token))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(LogoutComponent));
