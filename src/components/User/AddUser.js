import React from 'react';

const AddUser = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const username = this.refs.username.value;
    const email = this.refs.email.value;
    this.props.addUser(username)
  },
  render() {
    return (
      <div>
        <form ref="addUserForm" className="form-group" onSubmit={this.handleSubmit}>
          <input type="text" ref="username" placeholder="User Name" className="form-control"/>
          <input type="text" ref="email" placeholder="Email" className="form-control"/>
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
});

export default AddUser;