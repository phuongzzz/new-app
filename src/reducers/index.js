import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import reports from './reports';
import students from './students';
import topics from './topics';
import cvs from './cvs';
import session from './session';

const rootReducer = combineReducers({users, topics, cvs, session, reports, students, routing: routerReducer});

export default rootReducer;