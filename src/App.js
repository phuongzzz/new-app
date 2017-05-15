import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions';

import Main from './Main';

function mapStateToProps(state) {
  return {
    users: state.users,
    topics: state.topics,
    cvs: state.cvs,
    reports: state.reports,
    students: state.students,
    session: state.session
    //MORE FROM STATE
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;