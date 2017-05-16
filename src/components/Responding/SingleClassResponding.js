import React from 'react';
import './responding-page.css';

const SingleClassResponding = React.createClass({
    render(){
        const { className } = this.props.params;
        const classIndex = this.props.class_respondings.findIndex((class_responding) =>
        class_responding.class_name === parseInt(className,10));

        const class_filters = this.props.class_respondings.filter(
            class_responding => class_responding.class_name === className);

        return(
            <div className="row-responding">
                <div className="col-md-10 col-md-offset-1">
                    <table className="table company-table-respon table-hover table-sm table-striped table-fixed ">
                        <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Company</th>
                            <th className="text-center">Student</th>
                            <th className="text-center">Mssv</th>
                            <th className="text-center">Responding</th>
                            <th className="text-center">Class</th>
                        </tr>
                        </thead>
                        <tbody>
                        {class_filters.map((class_respon, i) =>
                            <tr key={i}>
                                <td>{class_respon.id}</td>
                                <td>{class_respon.company}</td>
                                <td>{class_respon.student}</td>
                                <td>{class_respon.mssv}</td>
                                <td>{class_respon.responding}</td>
                                <td>{class_respon.class_name}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});


export default SingleClassResponding;