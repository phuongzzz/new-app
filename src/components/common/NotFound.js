import React from 'react';
import { Link } from 'react-router';
import './not-found.css';

const NotFound = React.createClass ({
  render() {
    return (
      <div className="wrap">
        <div className="logo">
          <h1>404</h1>
          <p>Page not found, my friend! :(</p>
          <div className="sub">
            <p><Link to="/">Back to Home</Link></p>
          </div>
        </div>
      </div>
    );
  }
});

export default NotFound;