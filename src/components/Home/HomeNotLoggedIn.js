import React from 'react';
import './home-not-logged-in.css';
import { Link } from 'react-router';

const HomeNotLoggedIn = React.createClass({
  render() {
    return(
      <div className="not-logged-in-wrapper">
        <div className="slogan-wrapper">
          <h2>SIE Internhip Manager System</h2>
          <h4>To getting started, press</h4>
          <Link to="/login" className="phuong-simple-btn">Login</Link><br/>
          <h4>Don't have an account?</h4>
          <Link to="/" className="phuong-simple-btn">Contact</Link>
          <h4>to administrator</h4>
        </div>
      </div>
    );
  }
});

export default HomeNotLoggedIn;