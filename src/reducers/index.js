import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import reports from './reports';
import students from './students';
import topics from './topics';
import cvs from './cvs';
import marks from './marks';
import registered_topics from './registered_topics';
import assigns from './assigns';
import session from './session';

const rootReducer = combineReducers({users, topics, cvs, session, reports, students, marks, registered_topics, assigns, routing: routerReducer});

export default rootReducer;