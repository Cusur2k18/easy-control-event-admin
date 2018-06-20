import React from 'react';
import './AdminContainer.scss';
import withRouter from 'react-router-dom/withRouter';
import { connect } from 'react-redux';

import SettingsIcon from '@atlaskit/icon/glyph/settings';

import { ConfigRow } from '../../components';
import { ConfigurationItems } from '../../utils/config';

export class AdminContainer extends React.Component {



  handleClickItem = (url) => {
    console.log(url);
  }

  render() {
    return (
      <div id="admin-page">
        <div className="row">
          <div className="col-sm-12">
            <h2><SettingsIcon size="large" /></h2>
            <hr/>
          </div>

          <div className="col-sm-12">
            <ConfigRow 
              configurationItems={ConfigurationItems}
              onConfigClick={this.handleClickItem}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(AdminContainer));
