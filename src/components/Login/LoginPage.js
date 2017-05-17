import React from 'react';
import './login-page.css';

const LoginPage = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.logInUser(username, password);
  },

  render() {
    return (
      <div className="login">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="login-screen">
              <div className="login-icon">
                <img src={'https://designmodo.github.io/Flat-UI/img/icons/svg/book.svg'} alt="Welcome to Mail App" />
                <h4>Welcome to <small>SIE Internship</small></h4>
              </div>

              <form className="login-form" ref="login-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input ref="username" type="text" className="form-control login-field"  placeholder="Enter your name" id="login-name" />
                  <label className="login-field-icon fui-user" htmlFor="login-name"></label>
                </div>

                <div className="form-group">
                  <input ref="password" type="password" className="form-control login-field" placeholder="Password" id="login-pass" />
                  <label className="login-field-icon fui-lock" htmlFor="login-pass"></label>
                </div>

                <input type="submit" className="btn btn-primary btn-lg btn-block" href="#" value="Login"></input>
                <input type="submit" hidden ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default LoginPage;