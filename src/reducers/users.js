function users (state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      var newUser = {
        username: action.username,
        name: action.name,
        email: action.email
      }
      return [...state, newUser];
    default:
      return state;
  }
  return state;
}

export default users;