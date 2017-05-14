import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import topics from './topics';

const rootReducer = combineReducers({users, topics, routing: routerReducer});

export default rootReducer;