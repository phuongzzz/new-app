import React from 'react';
import './report-page.css';
import {Link} from 'react-router';

const SingleReport = React.createClass({
    render() {
        //GET INDEX OF USER
        const { reportId } = this.props.params;
        const i = this.props.reports.findIndex((report) =>
        report.id === parseInt(reportId, 10));
        //GET HIM!!!
        const studentIndex = this.props.students.findIndex((student) =>
        student.id === parseInt(reportId, 10));
        const report = this.props.reports[i];
        const student = this.props.students[studentIndex];

        return (
            <div>
                <div id="information">
                    <div className="col-md-4 col-md-offset-3">
                        <table className="table info-table table-bordered">
                            <thead >
                            <tr>
                                <th className="text-center">MSSV</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Class</th>
                                <th className="text-center">PhoneNumber</th>
                                <th className="text-center">Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{student.mssv}</td>
                                <td>{student.username}</td>
                                <td>{student.class}</td>
                                <td>{student.phonenumber}</td>
                                <td>{student.email}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="mark">
                    <div className="col-md-10 col-md-offset-1">
                        <table className="table sigle-report table-bordered">
                            <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Mssv</th>
                                <th className="text-center">Student</th>
                                <th className="text-center">Link Report</th>
                                <th className="text-center">Comment</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link to={`/report/${report.id}`}>{report.id}</Link></td>
                                    <td>{report.student_id}</td>
                                    <td>{report.name}</td>
                                    <td>{report.link}</td>
                                    <td>{report.comment}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
});

export  default SingleReport;