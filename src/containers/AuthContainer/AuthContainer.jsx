import React from 'react';

import './AuthContainer.scss';
import headerImg from '../../assets/header.png';

export default class AuthContainer extends React.Component {

  render() {

    return (
      <React.Fragment>
        <div className="top-bar text-center">
          <img src={headerImg} alt="Logo Centro Universitario del Sur" className="img-fluid"/>
        </div>
        <div className="container-fluid login-container">
          <div>
            <div className="row justify-content-center">
              <form className="col-sm-12 col-md-7">
                <div className="form-group mt-2">
                  <div className="col-sm-12 col-md-12">
                    <label >Username</label>
                    <input type="email" className="form-control" placeholder="Username" />
                  </div>
                </div>
                <div className="form-group mt-2">
                  <div className="col-sm-12 col-md-12">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                </div>
                <div className="text-center form-group mt-5">
                  <button type="submit" className="btn btn-outline-primary login-submit">Entrar</button> 
                </div>
              </form>
            </div>
          </div>
        </div>  
      </React.Fragment>
    )
  }
}
