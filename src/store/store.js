import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

//import data
import users from '../sample-data/users';
import topics from '../sample-data/topics';
import cvs from '../sample-data/cvs';
import reports from '../sample-data/reports';
import students from '../sample-data/students';
import marks from '../sample-data/marks';
import registered_topics from '../sample-data/registered_topics';
import assigns from '../sample-data/assigns';
import companies from '../sample-data/companies';
import company_respondings from '../sample-data/company_respondings';
import class_respondings from '../sample-data/class_respondings';
import classes from '../sample-data/classes';
import  status_internships from '../sample-data/status_internships';


//create default state
const defaultState = {
    users,
    topics,
    cvs,
    companies,
    classes,
    reports,
    students,
    marks,
    registered_topics,
    assigns,
    company_respondings,
    class_respondings,
    status_internships,
    session: sessionStorage.username
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk, logger()));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
