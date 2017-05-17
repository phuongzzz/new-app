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
import companies from './companies';
import classes from './classes';
import company_respondings from './company_respondings';
import class_respondings from './class_respondings';
import status_internships from './status_insternships';
import schedules from './schedules';
import groupnames from './groupnames';

const rootReducer = combineReducers({users, schedules, topics, cvs, session, reports, students, marks, registered_topics, assigns, companies, classes, company_respondings, class_respondings, status_internships, groupnames, routing: routerReducer});

export default rootReducer;