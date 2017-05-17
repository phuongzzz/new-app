function users (state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      var newUser = {
        id: action.userId,
        name: action.name,
        username: action.username,
        email: action.email,
        password: action.password,
        phonenumber: action.phonenumber,
        role: action.role
      }
      return state.concat(newUser);
    case 'CHANGE_USER':
      return state.map((user) => user.id !== action.userId
        ? user :
        Object.assign({}, user, {email: action.email}))
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.userId);
    default:
      return state;
  }
}

export default users;