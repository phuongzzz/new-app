import React from 'react';
import { Link } from 'react-router';
import './report-page.css';
import toastr from 'toastr';

const ReportPage = React.createClass({
  getInitialState: function () {
    return {
      showResponse: false,
      search: ''
    };
  },

  updateSearch(event) {
    this.setState({ search: event.target.value });
  },

  onClick: function () {
    this.setState({ showResponse: !this.state.showResponse });
  },

  handleCancel(e) {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      this.setState({ showResponse: !this.state.showResponse });
      toastr.error("Cancelled adding report");
    }
  },

  handleSubmit(e) {
    var last_report_id = parseInt(
      this.props.reports[this.props.reports.length - 1].id, 10);
    var next_report_id = ++last_report_id;
    var id = next_report_id;

    var last_student_id = parseInt(
      this.props.reports[this.props.reports.length - 1].student_id, 10);
    var next_student_id = ++last_student_id;
    var student_id = next_student_id;

    var name = this.refs.name.value;
    var link = this.refs.link.value;
    this.setState({ showResponse: !this.state.showResponse });

    this.props.addNewReport(id, student_id, name, link);

    toastr.success(name + " " + link);
  },

  render() {
    let filteredReports = this.props.reports.filter(
      (report) => {
        return report.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h4>List Reports</h4>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              {sessionStorage.getItem('role') === 'student' &&
                <button onClick={this.onClick} className="btn btn-success">Add new report</button>
              }
              <input type="text" className="form-control phuong-inline-input" placeholder="Search by username..."
                value={this.state.search}
                onChange={this.updateSearch} />
            </div>
          </div>
          {
            this.state.showResponse &&
            <div className="row">
              <div className="col-md-8 col-md-offset-2 phuong-left-align">
                <form ref="addNewResponseForm" className="form-group" onSubmit={this.handleSubmit}>
                  <input type="text" ref="class_name" hidden value="Test" readOnly />
                  <label>Student's name</label>
                  <input type="text" ref="name" placeholder="Enter your name"
                    className="form-control" />
                  <label>Link Report</label>
                  <input type="text" ref="link" placeholder="Enter your report link"
                    className="form-control" />
                  <div className="phuong-btn-group">
                    <input type="submit" className="btn btn-success" value="Save" />
                    <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          }
          {filteredReports.length !== 0 ?
            <table className="table report-table table-hover table-striped table-bordered">
              <thead className="thead-report">
                <tr>
                  <th className="">ID</th>
                  <th className="">Mssv</th>
                  <th className="">Student</th>
                  <th className="">Midterm Report</th>
                  <th className="">Final Report</th>
                  <th className="">Time checking</th>
                  <th className="">Comment</th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.map((report, i) =>
                  <tr key={i}>
                    <td><Link to={`/report/${report.id}`}>{report.id}</Link></td>
                    <td>{report.student_id}</td>
                    <td>{report.name}</td>
                    <td>{report.midterm}</td>
                    <td>{report.final}</td>
                    <td>{report.timechecking}</td>
                    <td>{report.comment}</td>
                  </tr>
                )}
              </tbody>
            </table> :
            <div className="report-search-error mark-search-error">Sorry but....we can't find <b>"{this.state.search}"</b> :( </div>
          }
        </div>
      </div>

    )
  }
});

export default ReportPage;
