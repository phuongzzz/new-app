import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';

import rootReducer from '../reducers/index';

//import data
import users from '../sample-data/users';
import topics from '../sample-data/topics';
import marks from '../sample-data/marks';
import reports from '../sample-data/reports';
import students from '../sample-data/students';
import registered_topics from '../sample-data/registered_topics';
import assigns from '../sample-data/assigns';
//create default state
const defaultState = {
  users,
  topics,
  marks,
  reports,
  students,
  registered_topics,
  assigns
};

const store = createStore(rootReducer, defaultState, applyMiddleware(logger()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
