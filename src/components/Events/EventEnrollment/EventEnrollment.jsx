import React from 'react'

export default (props) => {
  return (
    <React.Fragment>
      <ul className="list-group list-group-flush">
      {props.users.map( u => {
        return (
          <React.Fragment key={u.id}>
            <li className="list-group-item"> <span className="font-weigth-bold">Nombre:</span> {u.firstName + ' ' + u.lastName + ' ' + u.mLastName}</li>
            <li className="list-group-item"> <span className="font-weigth-bold">Carrera:</span> {u.career}</li>
            <li className="list-group-item"> <span className="font-weigth-bold">Codigo:</span> {u.studentCode}</li>
            <div className="strong-divider my-3"></div>
          </React.Fragment>
        )
      })}
      </ul>
    </React.Fragment>
  )
}
