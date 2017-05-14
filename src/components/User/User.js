import React from 'react';
import { Link } from 'react-router';
import './user.css';

const User = React.createClass({
  render() {
    const {user, i} = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img src={'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/16265197_1637576813218714_1150448365707028569_n.jpg?oh=563c3cdb8d9daf93495a5b595fe8ac2f&oe=59766BB6'} alt="boohoo"/>
          <h4><Link to={`/user/${user.id}`}>{user.name}</Link></h4>
          <p>{user.email} </p>
        </div>
      </div>
    );
  }
});

export default User;