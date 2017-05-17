import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
import { loadState, saveState } from './localStorage';

//import data
import users from '../sample-data/users';
import topics from '../sample-data/topics';
import cvs from '../sample-data/cvs';
import reports from '../sample-data/reports';
import students from '../sample-data/students';
import marks from '../sample-data/marks';
import registered_topics from '../sample-data/registered_topics';
import assigns from '../sample-data/assigns';
import classes from '../sample-data/classes';
import companies from '../sample-data/companies';
import company_respondings from '../sample-data/company_respondings';
import class_respondings from '../sample-data/class_respondings';
import status_internships from '../sample-data/status_internships';
import schedules from '../sample-data/schedules';

// const defaultState = loadState();

//create default state
const defaultState = {
  users,
  topics,
  cvs,
  schedules,
  reports,
  students,
  marks,
  registered_topics,
  assigns,
  classes,
  companies,
  class_respondings,
  company_respondings,
  status_internships,
  session: sessionStorage.username
};

// saveState(defaultState);

const persisted_state = loadState();

const store = createStore(rootReducer, persisted_state, applyMiddleware(thunk, logger()));

store.subscribe(() => {
  saveState(store.getState());
})

// export const history = syncHistoryWithStore(hashHistory, store);

export default store;

window.defaultState = defaultState;
