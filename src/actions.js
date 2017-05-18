import { hashHistory } from 'react-router';
import toastr from 'toastr';

export function addUser(userId, name, username, email, password, phonenumber, role) {
  console.log("add user action fired");
  return {
    type: 'ADD_USER',
    userId,
    name,
    username,
    email,
    password,
    phonenumber,
    role
  }
}

export function changeUser(email, userId) {
  return {
    type: 'CHANGE_USER',
    email,
    userId
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
          hashHistory.push("/");
          toastr.success("Login successfully");
        }
        else {
          dispatch(loginFailed());
          toastr.error('Error when login', 'Check your credentials');
        }
        break;
      default:
        dispatch(loginFailed());
        toastr.error('Error when login', 'Check your credentials');
        break;
    }
  }
}

export function logoutUser() {
  console.log("logout chay roi");
  sessionStorage.removeItem('username');
  hashHistory.push("/");
  return {
    type:'LOG_OUT'
  }
}

export function addNewCompanyResponse(id, company, mssv, student, responding) {
  return {
    type: 'ADD_COMPANY_RESPONSE',
    id,
    company,
    mssv,
    student,
    responding
  }
}

export function addNewClassResponse(id, company, mssv, student, responding, class_name) {
  return {
    type: 'ADD_CLASS_RESPONSE',
    id,
    company,
    student,
    mssv,
    responding,
    class_name
  }
}

export function addNewCV(id, name, position, dateofbirth, gender,
  phone, email, address, year_start, year_stop, grade, school, major,
  cpa, more_information, majorskill, majorskill_level, otherskill,
  otherskill_level, destination) {
  return {
    type: 'ADD_CV',
    id, name, position, dateofbirth, gender, phone, email, address,
    year_start, year_stop, grade, school, major, cpa, more_information, majorskill,
    majorskill_level, otherskill, otherskill_level, destination
  }
}

export function addNewReport(id, student_id, name, link) {
  return {
    type: 'ADD_REPORT',
    id,
    student_id,
    name,
    link
  }
}