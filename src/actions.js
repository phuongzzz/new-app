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

export function loginSuccess() {
  console.log("Login an roi");
  return {
    type: 'LOGIN_IN_SUCCESS'
  }
}

export function loginFailed() {
  console.log("login fail");
  return {
    type: 'LOGIN_FAIL'
  }
}

export function logInUser(username, password) {
  return function (dispatch) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username', username);
      dispatch(loginSuccess());
    }
    else {
      dispatch(loginFailed());
    }
  }
}