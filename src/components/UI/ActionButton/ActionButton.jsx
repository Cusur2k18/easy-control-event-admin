import React from 'react';

import EditIcon from '@atlaskit/icon/glyph/edit-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';

export default (props) => {
  let cssClasses = [], btn;

  switch (props.type) {
    case 'edit':
    cssClasses.push('btn-warning')
      btn = (
        <button type="button" className="btn-lg btn-warning" onClick={props.click}>
          <EditIcon size="large"/>
        </button>
      )
      break;
    case 'delete': 
      btn = (
        <button type="button" className="btn-lg btn-danger" onClick={props.click}>
          <TrashIcon size="large" />
        </button>
      )
      break;
  
    default:
      btn = (
        <button type="button" className={props.cssClass} onClick={props.click}>
          {props.children}
        </button>
      )
      break;
  }
  return btn;
}
