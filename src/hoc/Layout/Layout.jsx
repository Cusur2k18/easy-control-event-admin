import React from 'react';
import { connect } from 'react-redux';

import Page from '@atlaskit/page';

import { SidebarComponent } from '../../components/';

export class Layout extends React.Component {

  render() {
    let navigation = null,
        styleClasses = ['container-fluid','app-container', 'no-margin',  'mb-5']

    if (this.props.isLoggedIn) {
      navigation = <SidebarComponent />;
      styleClasses = ['container-fluid','app-container', 'mb-5']
    }

    return (
      <div className="main-container">
        <Page navigation={navigation} >
          <div className={styleClasses.join(' ')}>
            {this.props.children}
          </div>
        </Page>
        <div className="footer">
          <i> - Universidad de Guadalajara &reg; - </i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps, null)(Layout)