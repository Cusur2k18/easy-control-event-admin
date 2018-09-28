import React from 'react';
import './EventDetailComponent.scss';
import * as moment from 'moment';

import LocationIcon from '@atlaskit/icon/glyph/location';
import ClockIcon from '@atlaskit/icon/glyph/emoji/frequent';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import ActiveIcon from '@atlaskit/icon/glyph/presence-active';
import Tooltip from '@atlaskit/tooltip';
import Spinner from '@atlaskit/spinner'
import ModalDialog, { ModalTransition } from '@atlaskit/modal-dialog';
import RCTMarkdown from 'react-markdown';

import ActionButton from '../../UI/ActionButton/ActionButton';
import EventEnrollment from '../EventEnrollment/EventEnrollment'

export default (props) => {
  const { event } = props

  let content = (
    <React.Fragment>
      <div className="col-sm-12 col-md-12 event-detail">
        <div className="card">
          <img className="card-img-top" src={event.coverImg ? event.coverImg.split('upload/').join('upload/c_fill,h_200,w_1500/') : 'http://via.placeholder.com/1500X200?text=Portada'} alt={event.name} />
          <div className="card-body">
            <h5 className="card-title text-center">{event.name}</h5>
            <hr/>
            <div className="row mt-5">

              <div className="col-sm-12 col-md-12 col-lg-7 right-gray-border">
                <div className="description-event">
                   <RCTMarkdown source={event.description} />
                </div>
                <hr/>
                <ul className="styless-list">
                  <li className="list-row">
                    <ul className="list-item">
                      <li className="item-prop text-muted">Carrera:</li>
                      <li className="item-value">{event.career}</li>
                    </ul>
                  </li>
                </ul>
                <hr/>
                <div className="col-sm-12 mt-5">
                  <div className="col-sm-12 col-md-12">
                    <div className="row text-center">
                      <div className="col-12">
                        <Tooltip content="Editar evento" delay={100} position="top">
                          <ActionButton type="edit" click={() => {props.onEdit(event)}} />
                        </Tooltip>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-5 mt-5">
                <div className="col-sm-12">
                  <ul className="styless-list pl-2">
                    <li className="schedule-list-item">
                      <ActiveIcon size="medium" primaryColor="green"/> <span className="badge badge-success">ACTIVO</span>
                    </li>
                    <li className="schedule-list-item">
                      <LocationIcon size="medium"/> {event.location}
                    </li>
                    <li className="schedule-list-item">
                      <ClockIcon size="medium"/> {moment(event.startDateTime).format("dddd, Do MMM YYYY, k:mm a")} - {moment(event.endDateTime).format("dddd, Do MMM YYYY, k:mm a")}
                    </li>
                    <li className="schedule-list-item">
                      <PeopleGroupIcon size="medium"/> Usuarios registrados: <span className="badge badge-primary">{event.students && event.students.length}</span>
                      <br />
                      <br />
                      <ActionButton type="info" click={props.toggleEnrollments}>
                        Mostrar Usuarios
                      </ActionButton>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalTransition>
        {props.showEnrollments && (
          <ModalDialog heading="Usuarios" onClose={props.toggleEnrollments} className="btn-success">
            <EventEnrollment users={event.students ? event.students : []}/>
          </ModalDialog>)}
      </ModalTransition>
    </React.Fragment>
  )

  if (props.loading) {
    content = (
      <div className="d-flex align-items-center justify-content-center col-12">
        <div className="loading">
          <Spinner size="large" />
        </div>
      </div>
    )
  }
  return content
}
