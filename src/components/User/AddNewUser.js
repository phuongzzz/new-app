import React from 'react';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const AddNewUser = React.createClass({

  getInitialState() {
    return {
      errors: {}
    }
  },

  formIsValid() {
    var formIsValid = true;
    this.state.errors = {};

    if(this.refs.name.value.length < 3) {
      toastr.error("name must be exist");
      formIsValid = false;
    }

    // this.setState({
    //   errors: this.state.errors
    // });
    return formIsValid;

  },


  handleSubmit(e) {
    e.preventDefault();

    if(!this.formIsValid()) {
      return;
    }
    else {
      var lastUser = this.props.users[this.props.users.length - 1];
      var lastUserIndex = parseInt(lastUser.id, 10);
      var userId = lastUserIndex += 1;
      var groupnames = this.refs.groupnames;
      const name = this.refs.name.value;
      const username = this.refs.username.value;
      const email = this.refs.email.value;
      const password = this.refs.password.value;
      const phonenumber = this.refs.phonenumber.value;
      const role = groupnames.options[groupnames.selectedIndex].value;
      // this.props.addUser(userId, name, username, email, password, phonenumber, role);
      hashHistory.push("/users");
      toastr.success("Done");
    }
  },


  confirmCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      hashHistory.push("/users");
      toastr.warning("Cancel adding user");
    } else {
      toastr.success("Action cancelled");
    }
  },

  render() {
    const groupnames = this.props.groupnames;
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Manage User</h2>
          <form ref="addNewUserForm" className="form-group" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" ref="name" placeholder="Enter User's Name" className="form-control" />
            <label>User Name</label>
            <input type="text" ref="username" placeholder="Enter User's Username" className="form-control"/>
            <label>Email</label>
            <input type="email" ref="email" placeholder="Enter User's Email" className="form-control"/>
            <label>Password</label>
            <input type="text" ref="password" placeholder="Enter User's Password" className="form-control"/>
            <label>Phone number</label>
            <input type="text" ref="phonenumber" placeholder="Enter User's Number" className="form-control"/>
            <label>Role</label>
            <select className="form-control" ref="groupnames">
              {groupnames.map((groupname, i) => <option key={i} value={groupname}>{groupname}</option>)}
            </select>
            <br/>
            <input type="submit" hidden/>
            <input type="submit" className="btn btn-success" value="Save"/>
            <button className="btn btn-danger" onClick={this.confirmCancel}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
});

export default AddNewUser;