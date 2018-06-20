import React from 'react';

export default (props) => {

  let classes = ['table'];

  if (props.hoverable) {
    classes.push('table-hover')
  } 
  
  if (props.borderless) {
    classes.push('borderless')    
  }

  return (
    <React.Fragment>
      <table className={classes.join(' ')}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => props.click(1)}>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr onClick={() => props.click(2)}>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr onClick={() => props.click(3)}>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr onClick={() => props.click(4)}>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr onClick={() => props.click(5)}>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}