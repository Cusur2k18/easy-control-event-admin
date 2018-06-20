import React from 'react';

export default (props) => {

  let content = [];

  for (let index = 0; index < props.elements; index++) {
    content.push((
      <div className="col-md-3 mt-5" key={index}>
        <div className="card" >
          <img className="card-img-top" src="http://via.placeholder.com/150x150" alt="Card cap" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    ))
  }

  return content
    
}
