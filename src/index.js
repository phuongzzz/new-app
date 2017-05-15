import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import { Router, Route, IndexRoute } from 'react-router';
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

import store, { history } from './store/store';
window.store = store;

const router = (
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/users" component={UserGrid} onEnter={requireAuth}></Route>
      <Route path="/user/:userId" component={ManageUser}></Route>
      <Route path="/add-user" component={ManageUser}></Route>
      <Route path="/topics" component={TopicPage} onEnter={requireAuth}></Route>
      <Route path="/topic/:topicId" component={SingleTopic}></Route>
      <Route path="/reports" component={ReportPage}></Route>
      <Route path="/report/:reportId" component={SingleReport}></Route>
      <Route path="/marks" component={MarkPage}></Route>
      <Route path="/mark/:markId" component={SingleMark}></Route>
      <Route path="/assigns" component={AssignPage}></Route>
      <Route path="/listcv" component={ListCVPage}></Route>
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

ReactDOM.render(
  router,
  document.getElementById('root')
);
