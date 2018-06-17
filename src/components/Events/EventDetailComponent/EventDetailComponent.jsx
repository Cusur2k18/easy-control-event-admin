import React from 'react';
import './EventDetailComponent.scss';
import * as moment from 'moment';

import LocationIcon from '@atlaskit/icon/glyph/location';
import ClockIcon from '@atlaskit/icon/glyph/emoji/frequent';
import QRICon from '@atlaskit/icon/glyph/jira/capture';
import PeopleGroupIcon from '@atlaskit/icon/glyph/people-group';
import ActiveIcon from '@atlaskit/icon/glyph/presence-active';

import ThumbView from '../../UI/ThumbView/ThumbView';
import ActionButton from '../../UI/ActionButton/ActionButton';

export default (props) => {

  const divisionUsers = [];
  for (let index = 0; index < 5; index++) {
    const content = (
      <div className="user-item mt-1 ml-2" key={index}>
        <ThumbView tooltipContent={`user ${index + 1}`} url="http://via.placeholder.com/50x50" alt="nice"/>
      </div>
    )
    divisionUsers.push(content)
  }
  return (
    <React.Fragment>

      <div className="col-sm-12 col-md-10 event-detail">
        <div className="card">
          <img className="card-img-top" src="http://via.placeholder.com/300x30" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title text-center">Nombre del evento</h5>
            <hr/>
            <div className="row mt-5">

              <div className="col-sm-12 col-md-8 right-gray-border">
                <div className="description-event">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam enim sunt officiis earum repellat tenetur eos molestias, laudantium accusamus optio vitae perferendis voluptas nihil commodi porro, est culpa ullam voluptates qui nesciunt quo facere eum! Impedit illo ex, eos dolorum, asperiores exercitationem fugit excepturi odit atque iure aliquam voluptatibus?</p>
                </div>
                <hr/>
                <ul className="styless-list">
                  <li className="list-row">
                    <ul className="list-item">
                      <li className="item-prop text-muted">Carrera:</li>
                      <li className="item-value">Ing en Telematica</li>
                    </ul>
                  </li>
                  <li className="list-row">
                    <ul className="list-item d-flex">
                      <li className="item-prop text-muted">Coordinadores</li>
                      <li className="item-value">
                        <div className="users-for-event d-flex flex-wrap justify-content-around">
                          {divisionUsers}
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-4 mt-5">
                <div className="col-sm-12">
                  <ul className="styless-list pl-2">
                    <li className="schedule-list-item">
                      <ActiveIcon size="medium" primaryColor="green"/> <span className="badge badge-success">ACTIVO</span>
                    </li>
                    <li className="schedule-list-item">
                      <LocationIcon size="medium"/> Lugar del evento
                    </li>
                    <li className="schedule-list-item">
                      <ClockIcon size="medium"/> {moment().format("dddd, Do MMM YYYY, k:mm a")} - {moment().format("dddd, Do MMM YYYY, k:mm a")}
                    </li>
                    <li className="schedule-list-item">
                      <PeopleGroupIcon size="medium"/> Usuarios registrados: <span className="badge badge-primary">14</span>
                    </li>
                  </ul>
                </div>
                <hr/>
                <div className="col-sm-12 mt-5">
                  <div>
                    <p>Descarga el codigo QR de este evento</p>
                    <button type="button" className="btn btn-primary btn-block">
                      <QRICon size="small" /> Descargar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12-col-md-2 event-detail">
        <div className="d-flex flex-column">
          <div className="action-item">
            <ActionButton type="edit"/>
          </div>
          <div className="action-item mt-5">
            <ActionButton type="delete"/>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}
