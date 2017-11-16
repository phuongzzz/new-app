import React from 'react';
import _ from 'lodash';
import './home-logged-in.css';

const HomeLoggedIn = React.createClass({
  render() {
    var allUsers = this.props.users;
    var currentUser = _.find(allUsers, {username: sessionStorage.getItem('username')});
    // console.log(currentUser.username);
    return (
      <div className="profile-wrapper panel panel-info">
        <div className="container panel-heading">
          <h6 className="profile-title panel-title">Hi, {currentUser.name}! Here are your brief information</h6>
          <div className="row user-profile">
            <div className="col-md-3 col-lg-3" >
              <img className="img-circle img-responsive" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="User Pic"/>
            </div>
            <div className="col-md-9 col-lg-9">
              <div className="profile-info">
                <p><span className="profile-username">Your username: </span>{currentUser.username}</p>
                <p><span className="profile-email">Your email: </span>{currentUser.email}</p>
                <p><span className="profile-name">Your name: </span>{currentUser.name}</p>
                <p><span className="profile-phone">Your phone: </span>{currentUser.phonenumber}</p>
                <p><span className="profile-dob">Your birthday: </span>{currentUser.dateofbirth}</p>
                <p><span className="profile-role">Your role: </span>{currentUser.role}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
});

export default HomeLoggedIn;