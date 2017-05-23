import React from 'react';
import './responding-page.css';
import {Link} from 'react-router';

const RespondingPage = React.createClass({
  render(){
    return(
      <div id="row">
          <div className="row-responding">
            {/*forums company-responding*/}
              <div className="col-md-10 col-md-offset-1">
                  <h6>Company Responding Internship</h6>
                  <table className="table company-table-respon table-hover table-sm table-striped table-fixed ">
                      <thead>
                      <tr>
                          <th className="text-center">ID</th>
                          <th className="text-center">Company</th>
                      </tr>
                      </thead>
                      <tbody>
                      {this.props.companies.map((company, i) =>
                        <tr key={i}>
                            <td>{company.id}</td>
                            <td><Link to={`/company/${company.name}`}>{company.name}</Link></td>
                        </tr>
                      )}
                      </tbody>
                  </table>
              </div>
            {/*forums student-responding*/}
              <div className="col-md-10 col-md-offset-1">
                  <h6 className="h6-class-responding">Class Responding Internship</h6>
                  <table className="table class-table-respon table-hover table-sm table-striped">
                      <thead className="thead-class-respon">
                      <tr>
                          <th className="text-center">ID</th>
                          <th className="text-center">Class</th>
                      </tr>
                      </thead>
                      <tbody>
                      {this.props.classes.map((classe , i) =>
                        <tr key={i}>
                            <td>{classe.id}</td>
                            <td><Link to={`/classe/${classe.name}`}>{classe.name}</Link></td>
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


export default RespondingPage;