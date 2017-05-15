import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from './actions/actionCreators';

import Main from './Main';

function mapStateToProps(state) {
    return {
        users: state.users,
        topics: state.topics,
        marks: state.marks,
        reports: state.reports,
        students: state.students,
        assigns: state.assigns,
        registered_topics: state.registered_topics,
        //MORE FROM STATE
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;