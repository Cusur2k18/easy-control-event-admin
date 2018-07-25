import React from 'react';
import { displayTime } from '../../../utils'

export default (props) => {

  let classes = ['table'];

  if (props.hoverable && !props.loading) {
    classes.push('table-hover')
  } 
  
  if (props.borderless) {
    classes.push('borderless')    
  }

  
  let data = []

  if (!props.loading && props.items.length) {
    data = props.items.map( (item, i) => {
      return (
        <React.Fragment key={item.id}>
          <tr onClick={() => props.click(item)}>
            <th scope="row">{++i}</th>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{displayTime(item.startDateTime, item.endDateTime)}</td>
          </tr>
        </React.Fragment>
      )
    })
  } else if(props.loading) {
    for (let i = 0; i < 5; i++) {
      data.push((
        <React.Fragment key={i}>
          <tr onClick={() => {}}>
            <th scope="row"><div className="th-table-loading extra">&nbsp;</div></th>
            <td><div className="th-table-loading">&nbsp;</div></td>
            <td><div className="th-table-loading">&nbsp;</div></td>
            <td><div className="th-table-loading">&nbsp;</div></td>
          </tr>
        </React.Fragment>
      ));
    }
  } else {
    data = (
      <React.Fragment>
        <tr onClick={() => {}}>
          <td colSpan="4" className="text-center">
            <i className="text-muted">No hay datos</i>
          </td>
        </tr>
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      <table className={classes.join(' ')}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Lugar</th>
            <th scope="col">Hora</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </React.Fragment>
  )
}
