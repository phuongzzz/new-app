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
import AddUser from './components/User/AddUser';

import store, { history } from './store/store';
window.store = store;

const router = (
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/users" component={UserGrid}></Route>
      <Route path="/user/:userId" component={SingleUser}></Route>
      <Route path="/add-user" component={AddUser}></Route>
      <Route path="/topics" component={TopicPage}></Route>
    </Route>
  </Router>
</Provider>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
