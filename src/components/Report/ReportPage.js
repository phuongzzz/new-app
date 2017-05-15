import React from 'react';
import { Link } from 'react-router';
import './report-page.css';

const ReportPage = React.createClass({
    render(){
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    {/*{this.props.marks.map((mark,i) => <p key={i}>{mark.name}{mark.class}</p>)}*/}
                    <h4>List Reports</h4>
                    <table className="table report-table table-hover">
                        <thead className="thead-report">
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Mssv</th>
                            <th className="text-center">Student</th>
                            <th className="text-center">Link Report</th>
                            <th className="text-center">Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.reports.map((report, i) =>
                            <tr key={i}>
                                <td><Link to={`/report/${report.id}`}>{report.id}</Link></td>
                                <td>{report.student_id}</td>
                                <td>{report.name}</td>
                                <td>{report.link}</td>
                                <td>{report.comment}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
});

export default ReportPage;