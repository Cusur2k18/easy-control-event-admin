import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import Layout from './hoc/Layout/Layout';
import AppRoutes from './AppRoutes';
import * as actions from './store/actions';

class App extends React.Component {

  componentDidMount = () => {
    // Try to login on refresh browse window.
    this.props.onAutoSignIn();
  }

  render() {
    return (
      <Layout>
        <AppRoutes />
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onAutoSignIn: actions.autoSignIn
}


export default withRouter(connect(null, mapDispatchToProps)(App));
