import React from 'react';

import ImageComponent from '../../UI/ImageComponent/ImageComponent'

export default (props) => {
  return (
    <div className="row">
      <div className="col-sm-12 text-left mb-1">
        <button type="button" className="close float-left" onClick={props.closeClick}>
          <span>&times;</span>
        </button>
      </div>
      <div className="col-sm-12">
        <ImageComponent src="http://via.placeholder.com/200X200" alt="" position="center"/>
      </div>
      <div className="col-sm-12 mt-4">
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  )
}
