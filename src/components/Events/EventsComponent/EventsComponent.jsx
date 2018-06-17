import React from 'react';

import TableComponent from '../../UI/TableComponent/TableComponent';
import GridViewComponent from '../../UI/GridViewComponent/GridViewComponent';

export default (props) => {


  let contentView = (
    <div className="col-sm-12 mt-5">
      <TableComponent 
        hoverable
        borderless
        click={props.click}    
      />
    </div>
  )

  if (props.activeView === 'grid') {
    contentView = <GridViewComponent elements="5"/>
  }

  return contentView
}
