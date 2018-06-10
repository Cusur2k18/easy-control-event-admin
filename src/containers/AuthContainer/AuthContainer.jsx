import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as authActions from '../../store/actions';

import Spinner from '@atlaskit/spinner';
import EditorWarningIcon from '@atlaskit/icon/glyph/editor/warning';

import './AuthContainer.scss';
import headerImg from '../../assets/header.png';

export class AuthContainer extends React.Component {

  state = {
    username: null,
    password: null,
    error: null
  }

  setUsername = (e) => {

    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  setPassword = (e) => {

    this.setState({
      ...this.state,
      password: e.target.value
    })
  }

  onSubmitLogin = (e) => {
    e.preventDefault();

    if (this.checkValidity()) {
      const { username, password } = this.state;
      this.props.onLogin(username, password, true);
    } else {
      this.setState({
        ...this.state,
        error: 'Ingresa tu datos porfavor!'
      })
    }
  }

  checkValidity = () => {
    return this.state.username && this.state.password
  }

  render() {

    let action =  <button type="submit" className="btn btn-outline-primary login-submit">Entrar</button>,
        errorLogin = null

    if (this.props.isLoggingIn) {
      action = <Spinner size="large"/>
    }

    if (this.props.error || this.state.error) {
      errorLogin = (
        <div className="alert alert-danger">
          <span> <EditorWarningIcon size="small"/> {this.props.error || this.state.error}</span>
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className="top-bar text-center">
          <img src={headerImg} alt="Logo Centro Universitario del Sur" className="img-fluid"/>
        </div>
        <div className="container-fluid login-container">
          <div>
            <div className="row justify-content-center">
              <form className="col-sm-12 col-md-7" onSubmit={this.onSubmitLogin}>
                {errorLogin}
                <div className="form-group mt-2">
                  <div className="col-sm-12 col-md-12">
                    <label >Username</label>
                    <input type="text" className="form-control" placeholder="Username" disabled={this.props.isLoggingIn} onChange={this.setUsername}/>
                  </div>
                </div>
                <div className="form-group mt-2">
                  <div className="col-sm-12 col-md-12">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" disabled={this.props.isLoggingIn} onChange={this.setPassword}/>
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
  isLoggingIn: state.auth.isLoggingIn,
  error: state.auth.loginError
})

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password, includeUser) => dispatch(authActions.login(username, password, includeUser))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));
