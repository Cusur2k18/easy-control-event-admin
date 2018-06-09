import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';

import { SidebarComponent } from '../../components/';

export default class Layout extends React.Component {

  render() {
    return (
      <Page navigation={<SidebarComponent />}>
        <Grid layout="fixed">
          <GridColumn medium={12}>
            <h1>Activity</h1>
            <br />
            <br />
            <h4>All updates</h4>
            <br />
          </GridColumn>
        </Grid>
      </Page>
    )
  }
}
