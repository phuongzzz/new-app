//add user
export function addUser(username, email) {
  return {
    type: 'ADD_USER',
    username,
    email
  }
}

//remove user
export function removeUser(userId) {
  return {
    type: 'REMOVE_USER',
    userId
  }
}