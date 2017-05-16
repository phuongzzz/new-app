import { browserHistory } from 'react-router';
import toastr from 'toastr';

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
    type: 'LOGIN_SUCCESS'
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
    switch (username) {
      case 'admin':
      case 'phuongzzz':
      case 'phuong':
        if (password === 'admin') {
          sessionStorage.setItem('username', username);
          dispatch(loginSuccess());
          browserHistory.push("/");
          toastr.success("Login successfully");
        }
        else {
          dispatch(loginFailed());
          toastr.error('Error when login', 'Check your credentials');
        }
    }
  }
}

export function logoutUser() {
  console.log("logout chay roi");
  sessionStorage.removeItem('username');
  browserHistory.push("/");
  return {
    type:'LOG_OUT'
  }
}