import React from 'react';
import './assign-page.css';

const AssignPage = React.createClass({
  render(){


    return(
      <div id="row">
        {/*list registered topic*/}
        <div className="registed-row">
          <div className="col-md-10 col-md-offset-1">
            <h6 className="">List registered topic</h6>
            <table className="table registed-table table-hover table-striped">
              <thead className="thead-registed">
              <tr>
                <th className="text-center">ID</th>
                <th className="text-center">Student</th>
                <th className="text-center">Class</th>
                <th className="text-center">Topic</th>
                <th className="text-center">Company</th>
                <th className="text-center">Compare</th>
                <th className="text-center">Approve</th>
              </tr>
              </thead>
              <tbody>
              {this.props.registered_topics.map((registered_topic, i) =>
                <tr key={i}>
                  <td>{registered_topic.id}</td>
                  <td>{registered_topic.name}</td>
                  <td>{registered_topic.class}</td>
                  <td>{registered_topic.title}</td>
                  <td>{registered_topic.company}</td>
                  <td>{registered_topic.compare}</td>
                  {(sessionStorage.getItem('role') === 'student')
                  || (sessionStorage.getItem('role') === 'teacher_instructor')
                  || (sessionStorage.getItem('role') === 'company_instructor') ?
                    <td>Not authorized </td> :
                    <td>
                      <button className="btn btn-success">Approve</button>
                    </td>
                  }
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>

        {/*list assigned topic*/}
        <div className="col-md-10 col-md-offset-1">
          <h6 className="">List assigned topic</h6>
          <table className="table assign-table table-hover table-striped">
            <thead className="thead-assign">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Student</th>
              <th className="text-center">Class</th>
              <th className="text-center">Topic</th>
              <th className="text-center">Company</th>
            </tr>
            </thead>
            <tbody>
            {this.props.assigns.map((assign, i) =>
              <tr key={i}>
                <td>{assign.id}</td>
                <td>{assign.name}</td>
                <td>{assign.class}</td>
                <td>{assign.title}</td>
                <td>{assign.company}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
});


export default AssignPage;