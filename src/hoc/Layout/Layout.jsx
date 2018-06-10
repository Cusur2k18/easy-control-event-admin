import React from 'react';
import { connect } from 'react-redux';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { SidebarComponent } from '../../components/';

export class Layout extends React.Component {

  render() {
    let navigation = null;

    if (this.props.isLoggedIn) {
      navigation = <SidebarComponent />;
    }

    return (
      <div className="main-container">
        <Page navigation={navigation} >
          <div className="container-fluid">
            {this.props.children}
          </div>
        </Page>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, null)(Layout)