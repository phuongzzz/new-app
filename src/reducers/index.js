import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import topics from './topics';
import cvs from './cvs';

const rootReducer = combineReducers({users, topics, cvs, routing: routerReducer});

export default rootReducer;