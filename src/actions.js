import { hashHistory } from 'react-router';
import toastr from 'toastr';

export function addToAssignedTopic(topic) {
  return {
    type: 'ADD_TO_ASSIGN',
    topic
  }
}

export function fixMark(mark) {
  return {
    type: 'CHANGE_MARK',
    mark
  }
}

export function addNewTopic(topic) {
  return {
    type: 'ADD_NEW_TOPIC',
    topic
  }
}

export function addTopic(topic) {
  return {
    type: 'ADD_TOPIC',
    topic
  }
}

export function removeTopic(topic_id) {
  return {
    type: 'REMOVE_TOPIC',
    topic_id
  }
}

export function addToRegisteredTopic(topic) {
  // console.log(topic);
  return {
    type: 'ADD_TO_REGISTER',
    topic
  }
}

export function removeRegisteredTopic(topic_id) {
  return {
    type: 'REMOVE_FROM_REGISTER',
    topic_id
  }
}

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

export function logInUser(username, role, name) {
  return function (dispatch) {
    sessionStorage.setItem('role', role);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('name', name);
    dispatch(loginSuccess());
    if (username === 'admin') {
      hashHistory.push("/notifications");
    }
    else {
      hashHistory.push("/");
    }
    toastr.success("Login successfully");
  }
}

export function logoutUser() {
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('role');
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

export function pushNotificationToAdmin(noti_obj) {
  return {
    type: 'PUSH_NOTI_ADMIN',
    noti_obj
  }
}