export function addUser(username, name, phonenumber) {
  console.log("add user running");
  return {
    type: 'ADD_USER',
    username,
    name,
    phonenumber
  }
}

export function removeUser(userId) {
  return {
    type: 'REMOVE_USER',
    userId
  }
}