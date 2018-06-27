import React from 'react';
import './EventsContainer.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GridIcon from '@atlaskit/icon/glyph/media-services/grid';
import TableIcon from '@atlaskit/icon/glyph/table';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import AddIcon from '@atlaskit/icon/glyph/add-circle';
import Button, { ButtonGroup } from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';

import RichTextEditor from 'react-rte';

import { EventsComponent, EventDetailComponent, EventFormComponent } from '../../components';

export class EventsContainer extends React.Component {

  state = {
    activeView: 'table',
    isShow: false,
    eventDescription: RichTextEditor.createEmptyValue()
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isShow: !!this.props.match.params.id,
      isCreate: this.props.match.path.indexOf('/events/create') >= 0
    })
  }
  
  
  componentDidUpdate = (prevProps) => {
    if (this.componentDidChange(prevProps)) {
      this.setState({
        ...this.state,
        isShow: !!this.props.match.params.id,
        isCreate: this.props.match.path.indexOf('/events/create') >= 0
      })
    }
  }

  componentDidChange = (prevProps) => {
    return this.props.match.params.id !== prevProps.match.params.id
           || this.props.match.path !== prevProps.match.path;
  }

  onSwitchViews = (activeView) => {
    this.setState({ activeView })
  }

  handleClickElement = (id) => {
    this.props.history.push(`/events/${id}`);
  }

  onCreateEvent = () => {
    this.props.history.push(`/events/create`);
  }
  
  showUploader() {
    window.cloudinary.openUploadWidget({ cloud_name: 'demo', upload_preset: 'a5vxnzbp'}, 
      function(error, result) { console.log(error, result) });
  }

  editorChange = (value) => {
    this.setState({
      ...this.state,
      eventDescription: value
    })
  }

  render() {

    let contentView = (
      <EventsComponent 
        activeView={this.state.activeView}
        click={this.handleClickElement} />
    );
    let gridSelector = (
      <React.Fragment>
        <div className="float-left mr-5">
          <Button
            appearance="primary"
            onClick={this.onCreateEvent}>
              <AddIcon size="small" primaryColor="white" secondaryColor="#0052CC" />
              &nbsp;Crear Evento
          </Button>
        </div>
        <div className="grid-selector float-right mr-5">
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
      </React.Fragment>
    );

    if (this.state.isShow) {
      contentView = <EventDetailComponent />;
      gridSelector = null;
    }

    if (this.state.isCreate) {
      contentView = <EventFormComponent click={this.showUploader} eventDescription={this.state.eventDescription} editorChange={this.editorChange}/>;
      gridSelector = null;
    }

    return (
      <div id="events-page">
        <div className="row">
          <div className="col-sm-12">
            <h2><CalendarIcon size="large" /></h2>
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
