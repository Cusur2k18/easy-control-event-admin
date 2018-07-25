import React from 'react';

import TableComponent from '../../UI/TableComponent/TableComponent';
import CardComponent from '../../UI/CardComponent/CardComponent';
import { DateRangePicker } from '../../';

import * as moment from 'moment';

export default (props) => {

  let contentView = (
    <React.Fragment>

    <div className="col-sm-12 mt-5">
      <DateRangePicker
        onChangeDate={props.onChangeDateHandler}
        initialStartDate={moment().startOf('M')}
        initialEndDate={moment().endOf('M')}
        />
    </div>
    
    <div className="col-sm-12 mt-1">

      <TableComponent 
        hoverable
        borderless
        loading={props.loading}
        items={props.events}
        click={props.click}    
      />
    </div>
    </React.Fragment>
  )

  if (props.activeView === 'grid') {
    contentView = <CardComponent elements="5"/>
  }

  return contentView
}
