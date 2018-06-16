import React from 'react';
import './EventsContainer.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GridIcon from '@atlaskit/icon/glyph/media-services/grid';
import TableIcon from '@atlaskit/icon/glyph/table';
import Button, { ButtonGroup } from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';

import { TableComponent, GridViewComponent } from '../../components';

export class EventsContainer extends React.Component {

  state = {
    activeView: 'table'
  }


  onSwitchViews = (activeView) => {
    this.setState({ activeView })
  }

  render() {

    let contentView = (
      <div className="col-sm-12 mt-5">
        <TableComponent 
          hoverable
          borderless      
        />
      </div>
    )

    if (this.state.activeView === 'grid') {
      contentView = <GridViewComponent elements="5"/>
    }

    return (
      <div id="events-page">
        <div className="row">
          <div className="col-sm-12">
            <h2>Mis eventos</h2>
            <hr/>
            <div className="grid-selector ml-3">
              <ButtonGroup>
                <Tooltip content="Vista por tablas" delay={500}>
                  <Button 
                    onClick={() => this.onSwitchViews('table') }
                    isSelected={this.state.activeView === 'table'}>
                    <TableIcon size="medium" />
                  </Button>
                </Tooltip>
                <Tooltip content="Vista por columnas" delay={500}>
                  <Button 
                    onClick={() => this.onSwitchViews('grid')}
                    isSelected={this.state.activeView === 'grid'}>
                    <GridIcon size="medium" />
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {contentView}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(EventsContainer));
