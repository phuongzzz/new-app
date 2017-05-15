import React from 'react';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

const ManageUser = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const username = this.refs.username.value;
    const name = this.refs.name.value;
    const phonenumber = this.refs.phonenumber.value;
    this.props.addUser(username, name, phonenumber);
    console.log(username, name, phonenumber);
    browserHistory.push('/users');
    toastr.success("Done");
  },


  render() {
    var user = {};
    const { userId } = this.props.params;
    if (userId) {
      const i = this.props.users.findIndex((user) =>
      user.id === parseInt(userId, 10));
      //GET HIM!!!
      user = this.props.users[i];
    }
    else {
      user = {};
      // console.log(user);
    }

    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Manage User</h2>
          <form ref="addUserForm" className="form-group" onSubmit={this.handleSubmit}>
            <label>UserName</label>
            <input type="text" ref="username" placeholder="User Name" className="form-control" defaultValue={user.username}/>
            <label>Name</label>
            <input type="text" ref="name" placeholder="Name" className="form-control" defaultValue={user.name}/>
            <label>Phone Number</label>
            <input type="text" ref="phonenumber" placeholder="Phone Number" className="form-control" defaultValue={user.phonenumber}/>
            <input type="submit" hidden/>
            <input type="submit" className="btn btn-success" value="Save"/>
          </form>
        </div>
      </div>
    );
  }
});

export default ManageUser;