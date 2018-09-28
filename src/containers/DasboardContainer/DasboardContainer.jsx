import React from 'react';
import './DasboardContainer.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as moment from 'moment';

import EventIcon from '@atlaskit/icon/glyph/objects/24/event';
import ClockIcon from '@atlaskit/icon/glyph/emoji/frequent';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';
import Spinner from '@atlaskit/spinner'

import * as dashboardActions from '../../store/actions';
import { TableComponent } from '../../components/';

// Setup moment for Date internationalization and localization
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

export class DasboardContainer extends React.Component {

  componentDidMount = () => {

    // Get all data
    this.props.onGetTodayEvents();
    this.props.onGetFilteredEvents();
    this.props.onGetLatestEvents();
  }

  handleClickElement = (event) => {
    this.props.history.push(`/events/${event.uuid}`);
  }

  render() {
    
    return (
      <div id="dashboard">
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
                      <TableComponent 
                        hoverable
                        borderless
                        click={this.handleClickElement}
                        loading={this.props.todayLoading}
                        items={this.props.todayEvents || []}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="card green">
                  <div className="card-body">
                    <a className="float-right">Ver mas <ChevronRightIcon size="small" /></a>
                    <h5 className="card-title"> <EventIcon size="medium" primaryColor="#476F12" /> Ultimos eventos creados</h5>
                    <hr />
                    <div className="container mt-2">
                      <TableComponent 
                        hoverable
                        borderless
                        click={this.handleClickElement}
                        loading={this.props.latestLoading}
                        items={this.props.latestEvents || []}
                      />
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
                    events={this.props.filteredEvents || []}
                    selectable
                    views={{
                      month: true
                    }}
                    startAccessor='startDateTime'
                    endAccessor='endDateTime'
                    titleAccessor="name"
                    defaultDate={moment().toDate()} />
                  {this.props.filteredLoading && (<div className="loading-container b-40 d-flex align-items-center justify-content-center">
                    <div className="loading">
                      <Spinner size="large" />
                    </div>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todayEvents: state.dashboard.todayEvents,
  todayLoading: state.dashboard.loading.today,
  filteredEvents: state.dashboard.filteredEvents,
  filteredLoading: state.dashboard.loading.filtered,
  latestEvents: state.dashboard.latestEvents,
  latestLoading: state.dashboard.loading.latest,
  error: state.dashboard.dashboardError
})

const mapDispatchToProps = dispatch => {
  return {
    onGetTodayEvents: () => dispatch(dashboardActions.getTodayEvents()),
    onGetFilteredEvents: () => dispatch(dashboardActions.getFilteredEvents()),
    onGetLatestEvents: () => dispatch(dashboardActions.getLatestEvents())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DasboardContainer));
