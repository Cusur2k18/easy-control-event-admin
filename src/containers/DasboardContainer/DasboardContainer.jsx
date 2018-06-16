import React from 'react';
import './DasboardContainer.scss';

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as moment from 'moment';

import EventIcon from '@atlaskit/icon/glyph/objects/24/event';
import ClockIcon from '@atlaskit/icon/glyph/emoji/frequent';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';

// Setup moment for Date internationalization and localization
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

export default class DasboardContainer extends React.Component {

  render() {
    return (
      <div className="container-fluid app-container mb-5" id="dashboard">
        <div className="row">

          <div className="col-sm-12 col-md-12">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card orange">
                  <div className="card-body">
                    <a className="float-right">Ver mas <ChevronRightIcon size="small" /></a>
                    <h5 className="card-title"> <ClockIcon size="medium" primaryColor="#D57B23" /> Eventos para hoy</h5>
                    <hr />
                    <div className="container mt-2">
                      <table className="table table-md table-hover borderless">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="card orange">
                  <div className="card-body">
                    <a className="float-right">Ver mas <ChevronRightIcon size="small" /></a>
                    <h5 className="card-title"> <EventIcon size="medium" primaryColor="#476F12" /> Ultimos eventos creados</h5>
                    <hr />
                    <div className="container mt-2">
                      <table className="table table-md table-hover borderless">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 mt-5">
            <div className="card blue pb-5">
              <div className="card-body">
                <h5 className="card-title"> <CalendarIcon size="medium" primaryColor="#2690AF" /> Calendario</h5>
                <hr />
                <div className="container calendar mt-5">
                  <BigCalendar
                    events={[]}
                    selectable
                    views={['month', 'day', 'week']}
                    startAccessor='startDate'
                    endAccessor='endDate' />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}
