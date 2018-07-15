import React from 'react';

import TableComponent from '../../UI/TableComponent/TableComponent';
import CardComponent from '../../UI/CardComponent/CardComponent';

export default (props) => {


  let contentView = (
    <div className="col-sm-12 mt-5">
      <TableComponent 
        hoverable
        borderless
        items={[]}
        click={props.click}    
      />
    </div>
  )

  if (props.activeView === 'grid') {
    contentView = <CardComponent elements="5"/>
  }

  return contentView
}
