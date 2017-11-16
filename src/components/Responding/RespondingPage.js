import React from 'react';
import './responding-page.css';
import { Link } from 'react-router';

const RespondingPage = React.createClass({
  render() {
    return (
      <div id="row">
        <div className="col-md-8 col-md-offset-2 align">
          <h6><span className="fa fa-home"></span>&nbsp;Forum</h6>
        </div>
        {/*forums company-responding*/}
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-12">
            <table className="table company-table-respon table-hover table-sm table-striped table-fixed ">
              <tbody>
                <div className="content-company">
                  <span className="font-content">
                    Company Responding Internship
                      </span>
                </div>
                {this.props.companies.map((company, i) =>
                  <tr key={i}>
                    <td>
                      <span className="fa fa-comments"></span>
                      &nbsp; &nbsp;
                          <Link to={`/company/${company.name}`}>{company.name}</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/*forums student-responding*/}
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-12">
            <table className="table class-table-respon table-hover table-sm table-striped">
              <tbody>
                <span className="content-company">
                  <span className="font-content">Class Responding Internship</span>
                </span>
                {this.props.classes.map((classe, i) =>
                  <tr key={i}>
                    <td>
                      <span className="fa fa-comments"></span>
                      &nbsp; &nbsp;
                          <Link to={`/classe/${classe.name}`}>{classe.name}</Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <hr />
        </div>
      </div>
    )
  }

});


export default RespondingPage;
