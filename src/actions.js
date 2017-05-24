import { hashHistory } from 'react-router';
import toastr from 'toastr';

export function addToAssignedTopic(topic) {
  return {
    type: 'ADD_TO_ASSIGN',
    topic
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

export function logInUser(username, password) {
  return function (dispatch) {
    switch (username) {
      case 'admin':
        if (password === 'admin') {
          sessionStorage.setItem('role', 'admin');
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
      case 'phuongzzz':
        if (password === 'phuongzzz') {
          sessionStorage.setItem('role', 'student');
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
      case 'huonggiang':
        if (password === 'huonggiang') {
          sessionStorage.setItem('role', 'teacher_manager');
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

      case 'banhmai':
        if (password === 'banhmai') {
          sessionStorage.setItem('role', 'teacher_instructor');
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

      case 'leha':
        if (password === 'leha') {
          sessionStorage.setItem('role', 'company_agent');
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

      case 'phuongthao':
        if (password === 'phuongthao') {
          sessionStorage.setItem('role', 'company_instructor');
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