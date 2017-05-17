import React from 'react';
import './navigation-bar.css';
import { Link } from 'react-router';

const NavigationBar = React.createClass({

  handleLogout() {
    this.props.logoutUser();
  },

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
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
                <li><Link to="/schedule" >Internship Schedule</Link></li>
              </ul>
            </li>


            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Curriculum<b className="caret"></b></a>
              <span className="dropdown-arrow"></span>
              <ul className="dropdown-menu">
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/marks">Marks</Link></li>
                <li><Link to="/assigns">Assigns</Link></li>
              </ul>
            </li>

            <li><Link to="/users">Users</Link></li>
            <li><Link to="/listcv">List CV</Link></li>
            <li><Link to="/respondings">Forum</Link></li>
            <li><Link to="/status-internships">Internship Status</Link></li>


          </ul>
          {(Object.keys(this.props.session).length !== 0) ?
            <button className="btn btn-danger navbar-right log-btn"
              onClick={this.handleLogout}>Logout</button>
              :
            <Link to="/login" className="btn btn-primary navbar-right log-btn">Login</Link>
          }
        </div>
      </nav>
    );
  }
});

export default NavigationBar;