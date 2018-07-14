import React from 'react';
import * as moment from 'moment'

export default (props) => {

  let classes = ['table'];

  if (props.hoverable && !props.loading) {
    classes.push('table-hover')
  } 
  
  if (props.borderless) {
    classes.push('borderless')    
  }

  
  let data = []

  for (let i = 0; i < 5; i++) {
    data.push((
      <React.Fragment key={i}>
        <tr onClick={() => {}}>
          <th scope="row"><div className="th-table-loading">&nbsp;</div></th>
          <td><div className="th-table-loading">&nbsp;</div></td>
          <td><div className="th-table-loading">&nbsp;</div></td>
          <td><div className="th-table-loading">&nbsp;</div></td>
        </tr>
      </React.Fragment>
    ));
    
  }

  if (!props.loading) {
    data = props.items.map( (item, i) => {
      return (
        <React.Fragment key={item.id}>
          <tr onClick={() => props.click(item)}>
            <th scope="row">{++i}</th>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{`${moment(item.startDateTime).format('hh:mm a')} a ${moment(item.endDateTime).format('hh:mm a')} `}</td>
          </tr>
        </React.Fragment>
      )
    })
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
        <tbody className={props.loading ? 'opacity-4' : ''}>
          {data}
        </tbody>
      </table>
    </React.Fragment>
  )
}
