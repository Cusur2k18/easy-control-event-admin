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
import * as moment from 'moment'

import { MediaService } from '../../shared/services';
import { transformImage, validate } from '../../utils';

import * as eventsActions from '../../store/actions';

import { EventsComponent, EventDetailComponent, EventFormComponent } from '../../components';

export class EventsContainer extends React.Component {

  state = {
    activeView: 'table',
    isShow: false,
    isEdit: false,
    isCreate:false,
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
    validForm: false,
    showEnrollments: false
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      isShow: !!this.props.match.params.id,
      isCreate: this.props.match.path.indexOf('/events/create') >= 0,
      isEdit: this.props.location.search
    }, () => {
      if (this.state.isShow || this.state.isEdit) {
        this.props.getByUuid(this.props.match.params.id)
      } else {
        this.props.onGetAllEvents()
      }
    })

  }
  
  
  componentDidUpdate = (prevProps) => {
    if (this.componentDidChange(prevProps)) {
      this.setState({
        isShow: !!this.props.match.params.id,
        isCreate: this.props.match.path.indexOf('/events/create') >= 0,
        isEdit: this.props.location.search
      }, () => {
        if (this.state.isShow || this.state.isEdit) {
          this.props.getByUuid(this.props.match.params.id)
        } else {
          this.props.onGetAllEvents()
        }
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

  handleClickElement = (event) => {
    this.props.history.push(`/events/${event.uuid}`);
  }

  onCreateEvent = () => {
    this.props.history.push(`/events/create`);
  }

  onEditHandler = (event) => {
    console.log('TCL: EventsContainer -> onEditHandler -> event', this.props.singleEvent);
    this.props.history.push({
      pathname: `/events/${event.uuid}`,
      search: 'isEdit=true'
    });
    this.updateEditForm(event);
  }

  updateEditForm = (event) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        controls: {
          ...this.state.form.controls,
          name: {
            ...this.state.form.controls.name,
            validation: {
              ...this.state.form.controls.name.validation
            },
            valid: true,
            value: event.name
          },
          career: {
            ...this.state.form.controls.career,
            validation: {
              ...this.state.form.controls.career.validation
            },
            valid: true,
            value: event.career
          },
          location: {
            ...this.state.form.controls.location,
            validation: {
              ...this.state.form.controls.location.validation
            },
            valid: true,
            value: event.location
          },
          startDateTime: {
            ...this.state.form.controls.startDateTime,
            validation: {
              ...this.state.form.controls.startDateTime.validation
            },
            valid: true,
            value: event.startDateTime
          },
          endDateTime: {
            ...this.state.form.controls.endDateTime,
            validation: {
              ...this.state.form.controls.endDateTime.validation
            },
            valid: true,
            value: event.endDateTime
          },
          coverImg: {
            ...this.state.form.controls.coverImg,
            validation: {
              ...this.state.form.controls.coverImg.validation
            },
            valid: true,
            value: event.coverImg
          },
          description: {
            ...this.state.form.controls.description,
            validation: {
              ...this.state.form.controls.description.validation
            },
            valid: true,
            value: event.description ? RichTextEditor.createValueFromString(event.description, 'markdown') : RichTextEditor.createEmptyValue(),
            descriptionText: event.description ? event.description : ''
          }
        }
      },
      eventThumbnail: transformImage(event.coverImg ? event.coverImg : '', 'thumb'),
      validForm: true,
      isEdit: true
    })
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
        eventThumbnail: transformImage(data.secure_url, 'thumb'),
        validForm: true
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
    if (this.state.isEdit) {
      data.id = this.props.singleEvent.id
      console.log(data);
      this.props.onUpdateEvent(data)
    } else {
      this.props.onCreateEvent(data);
    }
  }

  onSuccessCreateEvent = () => {
    this.props.onSuccessUpsert()
    this.reloadForm()
    this.props.history.replace('/events')
  }

  reloadForm = () => {
    this.setState({
      activeView: 'table',
      isShow: false,
      isEdit: false,
      isCreate: false,
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
      validForm: false,
      showEnrollments: false
    }, () => {
      this.props.history.replace('/events')
    })
  }

  // Index Page Methods
  onGetFilteredEvents = (from, to) => {
    if (!!(from && to)) {
      this.props.onGetAllEvents(moment(from).format(), moment(to).format())
    }
    
  }

  onToggleEnrollmentsHandler = () => {
    this.setState((oldState) => {
      return {
        showEnrollments: !oldState.showEnrollments
      }
    })
  }

  render() {

    // Index Event
    let contentView = (
      <EventsComponent 
        events={this.props.filteredEvents || []}
        loading={this.props.filteredEventsLoading}
        onChangeDateHandler={this.onGetFilteredEvents}
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


    // Event Detail
    if (this.state.isShow) {
      contentView = (
        <EventDetailComponent 
          event={this.props.singleEvent || {}} 
          loading={this.props.singleEventLoading}
          onEdit={this.onEditHandler}
          onDelete={this.onDeleteHandler}
          showEnrollments={this.state.showEnrollments}
          toggleEnrollments={this.onToggleEnrollmentsHandler} />
        );
      gridSelector = null;
    }


    // Event Form
    if (this.state.isCreate || this.state.isEdit) {
      contentView = (
        <EventFormComponent 
          click={this.showUploader} 
          controls={this.state.form.controls} 
          formHandler={this.formChangeHandler}
          onSubmit={this.onSubmitForm}
          imagePreview={this.state.eventThumbnail}
          imageClick={this.onOpenImageModal}
          validForm={this.state.validForm}
          isEditing={this.state.isEdit}
          cancel={this.reloadForm}/>
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
          title={this.state.isEdit ? "Evento Actualizado" :"Evento creado"}
          message={this.state.isEdit ? "Se actualizo el evento correctamente" : "Se creo el evento correctamente"}
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
  successUpsert: state.events.successUpsert,
  filteredEvents: state.events.events,
  filteredEventsLoading: state.events.loading.index,
  singleEvent: state.events.singleEvent,
  singleEventLoading: state.events.loading.details
})

const mapDispatchToProps = dispatch => {
  return {
    onGetAllEvents: (from, to) => dispatch(eventsActions.getEvents(from, to)),
    getByUuid: (uuid) => dispatch(eventsActions.getEventByUuid(uuid)),
    onSuccessUpsert: () => dispatch(eventsActions.restartForm()),
    onCreateEvent: (event) => dispatch(eventsActions.saveEvent(event)),
    onUpdateEvent: (event) => dispatch(eventsActions.updateEvent(event))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsContainer));
