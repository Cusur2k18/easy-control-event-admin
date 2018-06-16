import React from 'react';
import './DasboardContainer.scss';
import EventIcon from '@atlaskit/icon/glyph/objects/24/event';
import ClockIcon from '@atlaskit/icon/glyph/emoji/frequent';

export default class DasboardContainer extends React.Component {

  render() {
    return (
      <div className="container-fluid app-container" id="dashboard">
        <div className="row">

          <div className="col-sm-12 col-md-6">
            <div className="card orange">
              <div className="card-body">
                <h5 className="card-title"> <ClockIcon size="medium" primaryColor="#D57B23"/> Eventos para hoy</h5>
                <hr/>
                <div className="container mt-2">
                  <table class="table table-hover borderless">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="card orange">
              <div className="card-body">
                <h5 className="card-title"> <EventIcon size="medium" primaryColor="#476F12"/> Ultimos eventos creados</h5>
                <hr/>
                <div className="container mt-2">
                  <table class="table table-hover borderless">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 mt-5">
            <div className="card blue">
              <div className="card-body">
                <h5 className="card-title">Third Table</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    )
  }
}
