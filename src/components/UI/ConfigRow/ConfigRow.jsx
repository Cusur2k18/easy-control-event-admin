import React from 'react';

export default (props) => {

  const { configurationItems } = props;

  const items = configurationItems.map( c => {
    return (
      <React.Fragment key={c.id}>
        <div className="col-sm-6 col-md-6" onClick={() => props.onConfigClick(c.url) }>
          <div className="row justify-content-center right-gray-border">
            <div className="config-item">
              <div className="col-12 config-item-icon">
                {c.icon}
              </div>
              <div className="col-12 config-item-body">
                <p className="font-weight-light">
                {c.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="row justify-content-center align-item-center text-center config-row">
      {items}
    </div>
  )
}
