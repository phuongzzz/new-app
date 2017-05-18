import React from 'react';
import { Link } from 'react-router';
import User from './User';
import './user-grid.css';

const UserGrid = React.createClass({
  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({search: event.target.value});
  },

  render() {
    let filteredUsers = this.props.users.filter(
      (user) => {
        return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="container user-grid">
        <div className="row">
          <Link to="/add-user" className="btn btn-success">Add User</Link>
        </div>
        <div className="row search-box">
          <div className="col-md-4 col-md-offset-4">
            <input type="text" className="form-control" placeholder="Search by username..."
                   value={this.state.search}
                   onChange={this.updateSearch}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            {filteredUsers.length !== 0 ?
              <div className="row row-eq-height">
                {filteredUsers.map((user, i) => <User {...this.props} key={i} i={i} user={user} />)}
              </div> :
              <div className="row text-center">No user has name like <b>"{this.state.search}"</b> found, my friend :(</div>
            }

          </div>
        </div>
      </div>
    )
  }
});

export default UserGrid;