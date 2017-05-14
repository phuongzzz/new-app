import React from 'react';
import './navigation-bar.css';
import { Link } from 'react-router';

const NavigationBar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-embossed" role="navigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
            <span className="sr-only">Toggle navigation</span>
          </button>
          <Link className="navbar-brand" to="/">SIE Internship</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse-01">
          <ul className="nav navbar-nav navbar-left">
            <li><a href="#fakelink">Notifications</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Internship <b className="caret"></b></a>
              <span className="dropdown-arrow"></span>
              <ul className="dropdown-menu">
                <li><Link to="/topics">Register Topic</Link></li>
                <li className="divider"></li>
                <li><a href="#">Internship Schedule</a></li>
              </ul>
            </li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

export default NavigationBar;