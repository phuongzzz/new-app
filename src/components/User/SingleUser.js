import React from 'react';

const SingleUser = React.createClass({
  render() {
    //GET INDEX OF USER
    const { userId } = this.props.params;
    const i = this.props.users.findIndex((user) =>
      user.id === parseInt(userId, 10));
    //GET HIM!!!
    const user = this.props.users[i];
    return (
      <p>{user.email}</p>
    )
  }
});

export default SingleUser;