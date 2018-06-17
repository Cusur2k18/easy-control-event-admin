import React from 'react';
import './EventsContainer.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GridIcon from '@atlaskit/icon/glyph/media-services/grid';
import TableIcon from '@atlaskit/icon/glyph/table';
import Button, { ButtonGroup } from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';

import { EventsComponent, EventDetailComponent } from '../../components';

export class EventsContainer extends React.Component {

  state = {
    activeView: 'table',
    isEdit: false
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isEdit: !!this.props.match.params.id
    })
  }
  
  
  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.setState({
        ...this.state,
        isEdit: !!this.props.match.params.id
      })
    }
  }

  onSwitchViews = (activeView) => {
    this.setState({ activeView })
  }

  handleClickElement = (id) => {
    this.props.history.push(`/events/${id}`);
  }

  render() {

    let contentView = (
      <EventsComponent 
        activeView={this.state.activeView}
        click={this.handleClickElement} />
    );
    let gridSelector = (
      <div className="grid-selector ml-3">
        <ButtonGroup>
          <Tooltip content="Vista por tablas" delay={300}>
            <Button
              onClick={() => this.onSwitchViews('table')}
              isSelected={this.state.activeView === 'table'}>
              <TableIcon size="medium" />
            </Button>
          </Tooltip>
          <Tooltip content="Vista por columnas" delay={300}>
            <Button
              onClick={() => this.onSwitchViews('grid')}
              isSelected={this.state.activeView === 'grid'}>
              <GridIcon size="medium" />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </div>
    );

    if (this.state.isEdit) {
      contentView = <EventDetailComponent />;
      gridSelector = null;
    }

    return (
      <div id="events-page">
        <div className="row">
          <div className="col-sm-12">
            <h2>{this.state.isEdit ? 'Detalle' : 'Mis Eventos'}</h2>
            <hr/>
            {gridSelector}
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
