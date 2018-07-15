import React from 'react'
import * as moment from 'moment'

export function displayTime(starDate, endDate) {
  if (moment(endDate).diff(moment(starDate), 'days') >= 1) {
    return (
      <React.Fragment>
        <i>Todo el dia</i>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <i>{moment(starDate).format('h:mm a')}</i> - <i>{moment(endDate).format('h:mm a')}</i>
    </React.Fragment>
  )
}