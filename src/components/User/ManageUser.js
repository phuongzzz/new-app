import React from 'react';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const ManageUser = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const email = this.refs.email.value;
    const userId = parseInt(this.refs.userId.value, 10);
    this.props.changeUser(email, userId);
    hashHistory.push('/users');
    toastr.success("Done");
  },

  confirmDelete(e) {
    e.preventDefault();
    if(confirm("Are you sure you want to delete your user?")) {
      this.props.removeUser(parseInt(this.refs.userId.value),10);
      hashHistory.push("/users");
      toastr.success("Delete done");
    } else {
      toastr.error("Action cancelled");
    }
  },

  render() {
    const { userId } = this.props.params;
    const i = this.props.users.findIndex((user) =>
    user.id === parseInt(userId, 10));
    const user = this.props.users[i];

    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Manage User</h2>
          <form ref="changeUserForm" className="form-group" onSubmit={this.handleSubmit}>
            <label>Email</label>
            <input type="email" ref="email" placeholder="User Email" className="form-control" defaultValue={user.email}/>
            <input type="number" ref="userId" hidden defaultValue={user.id}/>
            <input type="submit" hidden/>
            <input type="submit" className="btn btn-success" value="Save"/>
            <button className="btn btn-danger" onClick={this.confirmDelete}>Delete this user</button>
          </form>
        </div>
      </div>
    );
  }
});

export default ManageUser;