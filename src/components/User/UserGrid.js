import React from 'react';
import { Link } from 'react-router';
import User from './User';
import './user-grid.css';

const UserGrid = React.createClass({
  render() {
    return (
      <div className="container user-grid">
        <div className="row">
          <Link to="/add-user" className="btn btn-success">Add User</Link>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="row row-eq-height">
              {this.props.users.map((user, i) => <User {...this.props} key={i} i={i} user={user} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default UserGrid;