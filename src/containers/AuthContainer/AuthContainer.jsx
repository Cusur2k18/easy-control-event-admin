import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Spinner from '@atlaskit/spinner';
import './AuthContainer.scss';
import headerImg from '../../assets/header.png';

export class AuthContainer extends React.Component {

  render() {

    let action =  <button type="submit" className="btn btn-outline-primary login-submit">Entrar</button>
    if (this.props.isLoggingIn) {
      action = <Spinner size="large"/>
    }

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
                    <input type="email" className="form-control" placeholder="Username" disabled={this.props.isLoggingIn}/>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <div className="col-sm-12 col-md-12">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" disabled={this.props.isLoggingIn}/>
                  </div>
                </div>
                <div className="text-center form-group mt-5">
                  {action}
                </div>
              </form>
            </div>
          </div>
        </div>  
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  isLoggingIn: state.auth.isLoggingIn  
})

export default withRouter(connect(mapStateToProps, null)(AuthContainer));
