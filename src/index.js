import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import '../node_modules/toastr/build/toastr.min.css';
import './index.css';

import App from './App';
import SingleUser from './components/User/SingleUser';
import UserGrid from './components/User/UserGrid';
import HomePage from './components/Home/HomePage';
import TopicPage from './components/Topic/TopicPage';
import SingleTopic from './components/Topic/SingleTopic';
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
import AddCompanyRespondingPage from './components/Responding/AddCompanyRespondingPage';
import SingleCompanyResponding from './components/Responding/SingleCompanyResponding';
import StatusPage from './components/StatusPage/StatusPage';
import NotFound from './components/common/NotFound';

import store, { history } from './store/store';
window.store = store;

const router = (
<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/users" component={UserGrid} onEnter={requireAdmin}></Route>
      <Route path="/user/:userId" component={ManageUser} onEnter={requireAdmin}></Route>
      <Route path="/add-user" component={ManageUser} onEnter={requireAdmin}></Route>
      <Route path="/topics" component={TopicPage} onEnter={requireAuth}></Route>
      <Route path="/topic/:topicId" component={SingleTopic} onEnter={requireAuth}></Route>
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
      <Route path="/addcompanyresponse" component={AddCompanyRespondingPage}></Route>
      <Route path="/status-internships" component={StatusPage}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
</Provider>
);

function requireAuth(nextState, replace) {
  if (!sessionStorage.username) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function requireAdmin(nextState, replace) {
  if (sessionStorage.username !== 'admin') {
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
