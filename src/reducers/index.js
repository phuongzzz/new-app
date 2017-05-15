import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import topics from './topics';
import cvs from './cvs';
import session from './session';

const rootReducer = combineReducers({users, topics, cvs, session, routing: routerReducer});

export default rootReducer;