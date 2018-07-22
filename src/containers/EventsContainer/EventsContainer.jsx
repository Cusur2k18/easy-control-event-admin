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
import Simplert from 'react-simplert';
import Viewer from 'react-viewer';

import { MediaService } from '../../shared/services';
import { transformImage, validate } from '../../utils';

import * as eventsActions from '../../store/actions';

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
        location: {
          value: '',
          key: 'location',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        startDateTime: {
          value: '',
          key: 'startDateTime',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        endDateTime: {
          value: '',
          key: 'endDateTime',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        coverImg: {
          value: '',
          key: 'coverImg',
          validation: {
            required: false
          },
          valid: true,
          touched: false
        },
        description: {
          value: RichTextEditor.createEmptyValue(),
          key: 'description',
          descriptionText: '',
          validation: {
            required: false
          },
          valid: true,
          touched: false
        }
      }
    },
    eventThumbnail: null,
    showImage: false,
    showAlert: false,
    typeAlert: null,
    titleAlert: null,
    messageAlert: null,
    validForm: false

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
            coverImg: {
              ...this.state.form.controls.coverImg,
              validation: {
                ...this.state.form.controls.coverImg.validation
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
    updatedControl.touched = true
    updatedControl.valid = validate(updatedControl.value, updatedControl.validation)

    // Workaround: this is only for the wysiwyg editor
    if (key === 'description') {
      updatedControl.descriptionText = value.toString('markdown')
    }
    const validInputs = []
    Object.keys(this.state.form.controls).forEach( k => {
      validInputs.push(this.state.form.controls[k].valid)
    })
    this.setState({
      ...this.state,
      validForm: validInputs.every( valid => valid ),
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
    const formData = this.state.form.controls
    const data = {}
    Object.keys(formData).forEach( k => {
      data[k] = formData[k].value
      if (k === 'description') {  // Workaround for description field, since the editor needs to have the real object value for a good render
        data[k] = formData[k].descriptionText
      }
    })
    data.accountId = this.props.currentUser.accountId
    this.props.onCreateEvent(data);
  }

  onSuccessCreateEvent = () => {
    this.props.onSuccessUpsert()
    this.props.history.replace('/events')
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
          imageClick={this.onOpenImageModal}
          validForm={this.state.validForm}/>
      );
      gridSelector = null;
    }

    return (
      <React.Fragment>
        <Viewer
          visible={this.state.showImage}
          onClose={this.onCloseImageModal}
          images={[{src: this.state.form.controls.coverImg.value, alt: 'Nothing'}]} />
        <Simplert 
          showSimplert={this.props.successUpsert}
          type="success"
          title="Evento creado"
          message="Se creo el evento correctamente"
          onClose={this.onSuccessCreateEvent}
        />
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

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  loadingForm: state.events.loading.form,
  successUpsert: state.events.successUpsert
})

const mapDispatchToProps = dispatch => {
  return {
    onCreateEvent: (event) => dispatch(eventsActions.saveEvent(event)),
    onSuccessUpsert: () => dispatch(eventsActions.restartForm())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer));
