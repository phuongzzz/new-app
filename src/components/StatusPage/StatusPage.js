import React from 'react';

const StatusPage = React.createClass({
  render(){
    return(
      <div className="row-status">
          <div className="col-md-10 col-md-offset-1">
            <br/>
              <h4 className="text-left">
                <span className="fa fa-list-alt"></span> &nbsp; &nbsp;
                Status Internship</h4>
              <div className="table-wrap">
                  <table className="table status-table table-hover">
                      <thead className=" content-company sthead-status">
                      <tr>
                          <th className="text-left">Id</th>
                          <th className="text-left">Student</th>
                          <th className="text-left">Mssv</th>
                          <th className="text-left">Semester</th>
                          <th className="text-left">Start Time</th>
                          <th className="text-left">End Time</th>
                          <th className="text-left">Status</th>
                      </tr>
                      </thead>
                      <tbody>
                      {this.props.status_internships.map((status_internship, i) =>
                        <tr key={i}>
                            <td>{status_internship.id}</td>
                            <td>{status_internship.name}</td>
                            <td>{status_internship.mssv}</td>
                            <td>{status_internship.semester}</td>
                          <td>{status_internship.start_time}</td>
                          <td>{status_internship.end_time}</td>
                            <td className="td-status">{status_internship.status}</td>
                        </tr>
                      )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    )
  }
});


export default StatusPage;