import React from 'react'

export default (props) => {

  let cssClasses = ['img-fluid'];

  // Type
  if (props.type === 'thumb') {
    cssClasses.push('thumb');
  } else if (props.type === 'circle-thumb') {
    cssClasses.push('thumb', 'rounded-circle');
  }

  // Position
  if (props.position === 'left') {
    cssClasses.push('float-left');
  } else if (props.position === 'left') {
    cssClasses.push('float-right');
  } else if (props.position === 'center') {
    cssClasses.push('mx-auto d-block');
  }

  return (
    <React.Fragment>
      <img src={props.src} alt={props.alt} height={props.height} width={props.width} className={cssClasses.join(' ')}/>
    </React.Fragment>
  )
}
