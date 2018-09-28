import React from 'react';
import * as moment from 'moment';
import { withRouter } from 'react-router-dom';

export default withRouter(props => {

  return props.elements.map( ev => {
    return (
      <div className="col-md-3 mt-5" key={ev.id}>
        <div className="card" >
          <img className="card-img-top" src={ev.coverImg ? ev.coverImg : 'http://via.placeholder.com/150x150' } alt={ev.name} />
          <p className="card-text-title p-4">{ev.name}</p>
          <div className="card-body border border-dark p-2 mx-4 mb-4">
            <p className="card-text"> <b>Fecha de inicio: </b>{moment(ev.startDateTime).format('dddd d [de] MMMM [de] YYYY [a las] hh:mm a')}</p>
            <p className="card-text"> <b>Fecha de finalizacion: </b>{moment(ev.endDateTime).format('dddd d [de] MMMM [de] YYYY [a las] hh:mm a')}</p>
          </div>
          <div className="card-footer">
            <a 
              className="link text-underline font-italic item-clickable"
              onClick={() => {props.history.push('/events/' + ev.uuid)}}>
              Ver mas
            </a>
          </div>
        </div>
      </div>
    )
  })
})
