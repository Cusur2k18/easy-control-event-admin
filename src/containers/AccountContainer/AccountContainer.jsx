import React from 'react';

import PersonCircleIcon from '@atlaskit/icon/glyph/person-circle';

import { UserDetailComponent } from '../../components';

export default class AccountContainer extends React.Component {

  render() {
    return (
      <div id="my-account">
        <div className="row">

          <div className="col-sm-12">
            <h2><PersonCircleIcon size="large" /></h2>
            <hr/>
          </div>
          
          <div className="col-sm-12">
            <UserDetailComponent />
          </div>
          
        </div>
      </div>
    )
  }
}
