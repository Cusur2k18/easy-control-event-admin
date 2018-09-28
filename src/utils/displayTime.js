import React from 'react'
import * as moment from 'moment'

export function displayTime(starDate, endDate) {
  return (
    <React.Fragment>
      <i className="date-table-element">{moment(starDate).format('dd d MMM h:mm a')}</i> - <i className="date-table-element">{moment(endDate).format('dd d MMM h:mm a')}</i>
    </React.Fragment>
  )
}