import React from 'react';

const ManageUser = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    this.props.addUser(username)
  },
  render() {

    const { userId } = this.props.params;
    var user = {};
    if (userId) {
      const i = this.props.users.findIndex((user) =>
      user.id === parseInt(userId, 10));
      //GET HIM!!!
      user = this.props.users[i];
      console.log(user);
    }
    else {
      user = {};
      console.log(user);
    }

    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <form ref="addUserForm" className="form-group" onSubmit={this.handleSubmit}>
            <input type="text" ref="username" placeholder="User Name" className="form-control" value={user.username}/>
            <input type="text" ref="name" placeholder="Name" className="form-control" value={user.name}/>
            <input type="text" ref="phonenumber" placeholder="Phone Number" className="form-control" value={user.phonenumber}/>
            <input type="submit" hidden/>
          </form>
        </div>
      </div>
    );
  }
});

export default ManageUser;