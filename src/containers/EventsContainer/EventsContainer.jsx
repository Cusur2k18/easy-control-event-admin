import React from 'react';
import './EventsContainer.scss';
import 'react-viewer/dist/index.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import GridIcon from '@atlaskit/icon/glyph/media-services/grid';
import TableIcon from '@atlaskit/icon/glyph/table';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import AddIcon from '@atlaskit/icon/glyph/add-circle';
import Button, { ButtonGroup } from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';

import RichTextEditor from 'react-rte';
import Viewer from 'react-viewer';

import { MediaService } from '../../shared/services';
import { transformImage } from '../../utils';

import { EventsComponent, EventDetailComponent, EventFormComponent } from '../../components';

export class EventsContainer extends React.Component {

  state = {
    activeView: 'table',
    isShow: false,
    form: {
      controls: {
        name: {
          value: '',
          key: 'name',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        career: {
          value: '',
          key: 'career',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        place: {
          value: '',
          key: 'place',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        startDate: {
          value: '',
          key: 'startDate',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        endDate: {
          value: '',
          key: 'endDate',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        photo: {
          value: '',
          key: 'photo',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        description: {
          value: RichTextEditor.createEmptyValue(),
          key: 'description',
          descriptionText: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      }
    },
    eventThumbnail: null,
    showImage: false
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
  
  showUploader = () => {
    MediaService.showUploader((error, result) => {
      if (error) {
        console.log('Error uploading the image', error)
        return
      }
      const data = result[0];
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          controls: {
            ...this.state.form.controls,
            photo: {
              ...this.state.form.controls.photo,
              validation: {
                ...this.state.form.controls.photo.validation
              },
              value: data.secure_url
            }
          }
        },
        eventThumbnail: transformImage(data.secure_url, 'thumb')
      })
    })

  }

  formChangeHandler = (value, key) => {
    const updatedControl = {...this.state.form.controls[key]}
    updatedControl.value = value

    // Workaround: this is only for the wysiwyg editor
    if (key === 'description') {
      updatedControl.descriptionText = value.toString('markdown')
    }
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        controls: {
          ...this.state.form.controls,
          [key]: updatedControl
        }
      }
    })
  }

  onCloseImageModal = () => {
    this.setState({ showImage: false })
  }

  onOpenImageModal = () => {
    this.setState({ showImage: true })
  }

  onSubmitForm = (e) => {
    e.preventDefault()
    console.log('this.state.form.controls', this.state.form.controls);
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
      contentView = (
        <EventFormComponent 
          click={this.showUploader} 
          controls={this.state.form.controls} 
          formHandler={this.formChangeHandler}
          onSubmit={this.onSubmitForm}
          imagePreview={this.state.eventThumbnail}
          imageClick={this.onOpenImageModal}/>
      );
      gridSelector = null;
    }

    return (
      <React.Fragment>
        <Viewer
          visible={this.state.showImage}
          onClose={this.onCloseImageModal}
          images={[{src: this.state.form.controls.photo.value, alt: 'Nothing'}]} />
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
      </React.Fragment>
    )
  }
}

export default withRouter(connect(null, null)(EventsContainer));
