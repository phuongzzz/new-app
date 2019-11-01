import React from 'react';
import { Link } from 'react-router';
import './user.css';

const User = React.createClass({
  render() {
    const { user } = this.props;
    return (
      <div className="col-md-3">
        <div className="card">
          <img src={'http://cdn.jasnor.com.au/media/catalog/category/pusheen_the_cat.png'} alt="boohoo" />
          <h4><Link to={`/user/${user.id}`}>{user.name}</Link></h4>
          <p>{user.email} </p>
        </div>
      </div>
    );
  }
});

export default User;
