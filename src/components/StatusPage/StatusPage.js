import React from 'react';
import './status-page.css';

const StatusPage = React.createClass({
  render(){
    return(
      <div className="row-status">
          <div className="col-md-10 col-md-offset-1">
            <br/>
              <br/>
             <div className="row" >
                 <div className="col-md-4">
                     <h4 className="text-left h4-position">
                         <span className="fa fa-list-alt"></span> &nbsp; &nbsp;
                         Status Internship</h4>
                 </div>
                <div className="col-md-6 col-md-push-2">
                    <form>
                        <fieldset>
                            <input type="text" id="s" className="search"/>
                            <input type="submit" value="Submit" id="submitButton" className="icon glyphicon-search"/>
                            <div className="searchInContainer col-md-8 col-md-offset-2">
                                <input type="radio" name="check" value="site"/> &nbsp;
                                <label htmlFor="searchSite">ClassName</label> &nbsp; &nbsp;
                                <input type="radio" name="check" value="site" id="searchWeb"/> &nbsp;
                                <label htmlFor="searchSite">Semester</label>
                            </div>
                        </fieldset>
                    </form>
                </div>
             </div>
              <div className="table-wrap">
                  <table className="table status-table table-hover">
                      <thead className=" content-company sthead-status">
                      <tr>
                          <th className="text-left">Id</th>
                          <th className="text-left">Student</th>
                          <th className="text-left">Mssv</th>
                          <th className="text-left">Class</th>
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
                            <td>{status_internship.classname}</td>
                            <td>{status_internship.semester}</td>
                          <td>{status_internship.start_time}</td>
                          <td>{status_internship.end_time}</td>
                            <td className="td-status">{status_internship.status}</td>
                        </tr>
                      )}
                      </tbody>
                  </table>
              </div>
              <button className="btn btn-primary">Export</button>
          </div>
      </div>
    )
  }
});


export default StatusPage;