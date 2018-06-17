import React from 'react';
import Tooltip from '@atlaskit/tooltip';

export default (props) => {

  return (
    <React.Fragment>
      <Tooltip content={props.tooltipContent} delay={300}>
        <img src={props.url} alt={props.alt} className="img-thumbnail rounded-circle"/>
      </Tooltip>
    </React.Fragment>
  )
}
