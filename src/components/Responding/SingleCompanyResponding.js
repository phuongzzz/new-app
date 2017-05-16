import React from 'react';
import './responding-page.css';

const SingleClassResponding = React.createClass({

    render(){
        const {companyName} = this.props.params;
        const companyIndex = this.props.company_respondings.findIndex((company_responding)=>
        company_responding.company === parseInt(companyName,10));

        const company_filters = this.props.company_respondings.filter(
            company_respoding => company_respoding.company === companyName);

        console.log(company_filters);


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
                        </tr>
                        </thead>
                        <tbody>
                        {company_filters.map((company_respon, i) =>
                            <tr key={i}>
                                <td>{company_respon.id}</td>
                                <td>{company_respon.company}</td>
                                <td>{company_respon.student}</td>
                                <td>{company_respon.mssv}</td>
                                <td>{company_respon.responding}</td>
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