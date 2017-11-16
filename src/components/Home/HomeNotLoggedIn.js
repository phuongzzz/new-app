import React from 'react';
import './home-not-logged-in.css';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const HomeNotLoggedIn = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var lastUser = this.props.users[this.props.users.length - 1];
    var lastUserIndex = parseInt(lastUser.id, 10);
    var userId = lastUserIndex += 1;
    const name = this.refs.username.value;
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const phonenumber = "not specified";
    const role = "student";
    this.props.addUser(userId, name, username, email, password, phonenumber, role);
    hashHistory.push("/login");
    toastr.success("Register done, you can try to login");
  },

  render() {
    return (
      <div className="row not-logged-in-wrapper">
        <div className="col-md-6 col-sm-6 col-xs-6 slogan-wrapper">
          <h2>SIE Internship Manager System</h2>
          <h4>To getting started, press</h4>
          <Link to="/login" className="phuong-simple-btn">Login</Link><br />
          <h4>Don't have an account?</h4>
          <Link to="/contact" className="phuong-simple-btn">Contact</Link>
          <h4>to administrator</h4>
        </div>
        <div className="col-md-4 col-md-offset-1 col-xs-4 col-sm-8 mx-auto">
          <div className="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4">
            <form className="home-hero-signup js-signup-form" onSubmit={this.handleSubmit}>
              <dl className="form-group mt-0">
                <dt className="input-label">
                  <label className="form-label f5">UserName</label>
                </dt>
                <dd>
                  <input type="text" name="user[login]" id="user[login]" className="form-control form-control-lg input-block"
                    placeholder="Pick a username" required ref="username" />
                </dd>
              </dl>
              <dl className="form-group mt-0 mai-form">
                <dt className="input-label">
                  <label className="form-label f5">Email</label>
                </dt>
                <dd>
                  <input type="email" name="user[email]" id="user[email]" className="form-control form-control-lg input-block"
                    placeholder="your@email.com" required ref="email" />
                </dd>
              </dl>
              <dl className="form-group mt-0">
                <dt className="input-label">
                  <label className="form-label f5" htmlFor="user[password]">Password</label>
                </dt>
                <dd>
                  <input type="password" name="user[password]" id="user[password]" className="form-control form-control-lg input-block"
                    placeholder="Create a new password" required ref="password" />
                  <p className="form-control-note">Use at least one letter, one numeral, and seven characters.</p>
                </dd>
              </dl>
              <button className="btn btn-success btn-large f4 btn-block" type="submit">
                Sign up for SIE Internship</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default HomeNotLoggedIn;
