import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users';
import topics from './topics';
import marks from './marks';
import reports from './reports';
import students from './students';
import assigns from './assigns';
import registered_topics from './registered_topics';

const rootReducer = combineReducers({users,assigns,registered_topics, topics, marks, reports, students, routing: routerReducer});

export default rootReducer;