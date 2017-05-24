import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import '../node_modules/toastr/build/toastr.min.css';
import './index.css';

import App from './App';
import AddNewUser from './components/User/AddNewUser';
import UserGrid from './components/User/UserGrid';
import HomePage from './components/Home/HomePage';
import TopicPage from './components/Topic/TopicPage';
import SingleTopic from './components/Topic/SingleTopic';
import CreateNewTopic from './components/Topic/CreateNewTopic';
import ManageUser from './components/User/ManageUser';
import LoginPage from './components/Login/LoginPage';
import ReportPage from './components/Report/ReportPage';
import SingleReport from './components/Report/SingleReport';
import MarkPage from './components/Mark/MarkPage';
import SingleMark from './components/Mark/SingleMark';
import AssignPage from './components/Assign/AssignPage';
import ListCVPage from './components/CV/ListCVPage';
import SingleCVPage from './components/CV/SingleCVPage';
import AddCVPage from './components/CV/AddCVPage';
import RespondingPage from './components/Responding/RespondingPage';
import InternshipSchedulePage from './components/Schedule/InternshipSchedulePage';
import SingleClassResponding from './components/Responding/SingleClassResponding';
import SingleCompanyResponding from './components/Responding/SingleCompanyResponding';
import StatusPage from './components/StatusPage/StatusPage';
import ContactForm from './components/ContactForm/ContactForm';
import Notifications from './components/Notifications/Notifications';
import NotFound from './components/common/NotFound';
import store, { history } from './store/store';
window.store = store;

// window.localStorage.clear();
window.sessionStorage.clear();
window.initState(window.defaultState);

var refresh = window.localStorage.getItem('refresh');
// console.log(refresh);
if (refresh===null){
  window.location.reload();
  window.localStorage.setItem('refresh', "1");
}

const router = (
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/users" component={UserGrid} onEnter={requireAdmin}></Route>
      <Route path="/user/:userId" component={ManageUser} onEnter={requireAdmin}></Route>
      <Route path="/add-user" component={AddNewUser} onEnter={requireAdmin}></Route>
      <Route path="/topics" component={TopicPage} onEnter={requireAuth}></Route>
      <Route path="/topic/:topicId" component={SingleTopic} onEnter={requireAuth}></Route>
      <Route path="/create-topic" component={CreateNewTopic}></Route>
      <Route path="/reports" component={ReportPage}></Route>
      <Route path="/report/:reportId" component={SingleReport}></Route>
      <Route path="/marks" component={MarkPage}></Route>
      <Route path="/mark/:markId" component={SingleMark}></Route>
      <Route path="/assigns" component={AssignPage}></Route>
      <Route path="/listcv" component={ListCVPage}></Route>
      <Route path="/schedule" component={InternshipSchedulePage}></Route>
      <Route path="/cv/:cvId" component={SingleCVPage}></Route>
      <Route path="/addnewcv" components={AddCVPage}></Route>
      <Route path="/respondings" component={RespondingPage}></Route>
      <Route path="/classe/:className" component={SingleClassResponding}></Route>
      <Route path="/company/:companyName" component={SingleCompanyResponding}></Route>
      <Route path="/status-internships" component={StatusPage}></Route>
      <Route path="/contact" component={ContactForm}></Route>
      <Route path="/notifications" component={Notifications}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
</Provider>
);

function requireAuth(nextState, replace) {
  if (!sessionStorage.role) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireAdmin(nextState, replace) {
  if (sessionStorage.role !== 'admin') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireStudent(nextState, replace) {
  if (sessionStorage.role !== 'student') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireTeacherManager(nextState, replace) {
  if (sessionStorage.role !== 'teacher_manager') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireTeacherInstructor(nextState, replace) {
  if (sessionStorage.role !== 'teacher_instructor') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireCompanyAgent(nextState, replace) {
  if (sessionStorage.role !== 'company_agent') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireCompanyInstructor(nextState, replace) {
  if (sessionStorage.role !== 'company_instructor') {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDOM.render(
  router,
  document.getElementById('root')
);
