import React from 'react';
import './assign-page.css';
import RegisteredTopic from '../Topic/RegisteredTopic';

const AssignPage = React.createClass({
  render(){


    return(
      <div id="row">
        {/*list registered topic*/}
        <div className="registed-row">
          <div className="col-md-10 col-md-offset-1">
            <h6 className="h6head">List registered topic</h6>
            <hr/>
            {this.props.registered_topics.length !== 0 ?
              this.props.registered_topics.map((registered_topic, i) =>
                <RegisteredTopic {...this.props} key={i} i={i} registered_topic={registered_topic} />) :
              <div>No topic to assign</div>
            }
            <hr/>
          </div>
        </div>

        {/*list assigned topic*/}
        <div className="col-md-10 col-md-offset-1">
          <h6 className="h6head">List assigned topic</h6>
          <hr/>
          <table className="table assign-table table-hover table-striped">
            <thead className="thead-assign">
            <tr>
              <th className="text-center">Topic</th>
              <th className="text-center">Company</th>
            </tr>
            </thead>
            <tbody>
            {this.props.assigns.map((assign, i) =>
              <tr key={i}>
                <td>{assign.title}</td>
                <td>{assign.company_name}</td>
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