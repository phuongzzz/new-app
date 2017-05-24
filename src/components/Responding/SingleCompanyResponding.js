import React from 'react';
import './responding-page.css';
import toastr from 'toastr';

const SingleClassResponding = React.createClass({

  getInitialState: function() {
    return { showResponse: false };
  },

  onClick: function() {
    this.setState({ showResponse: !this.state.showResponse });
  },

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      this.setState({ showResponse: !this.state.showResponse });
      toastr.error("Cancelled adding response for student");
    }
  },

  handleSubmit(e) {
    //GET THE LAST COMPANY_RESPONSE_ID
    var last_company_response_id = parseInt(
      this.props.company_respondings[this.props.company_respondings.length - 1].id, 10);
    //CALCULATE NEXT COMPANY_RESPONSE_ID
    var next_company_response_id = ++last_company_response_id;

    const id = next_company_response_id;
    const company = this.refs.company.value;
    const mssv = this.refs.mssv.value;
    const student = this.refs.student.value;
    const responding = this.refs.responding.value;

    this.props.addNewCompanyResponse(id, company,
      mssv, student, responding);
    this.setState({ showResponse: !this.state.showResponse });
    toastr.success("Done adding response for " + student);
  },

  render(){
    const {companyName} = this.props.params;
    // const companyIndex = this.props.company_respondings.findIndex((company_responding)=>
    // company_responding.company === parseInt(companyName,10));

    const company_filters = this.props.company_respondings.filter(
      company_respoding => company_respoding.company === companyName);

    return(
      <div className="row-responding">
        <div className="col-md-10 col-md-offset-1">
          <h3 className="text-center">Responses of {companyName}</h3>
          {(sessionStorage.getItem('role') === 'company_instructor') &&
          <button onClick={this.onClick} className="btn btn-success">Add new response</button>
          }
          {
            this.state.showResponse &&
              <div className="row">
                <div className="col-md-8 col-md-offset-2 phuong-left-align">
                  <form ref="addNewResponseForm" className="form-group" onSubmit={this.handleSubmit}>
                    <input type="text" ref="company" hidden value={companyName} readOnly/>
                    <label>Student's Name</label>
                    <input type="text" ref="student" placeholder="Enter Student's Name"
                           className="form-control"/>
                    <label>Student's ID</label>
                    <input type="text" ref="mssv" placeholder="Enter Student's Student ID"
                           className="form-control"/>
                    <label>Response Content</label>
                    <input type="text" ref="responding" placeholder="Enter response for this student"
                           className="form-control"/>
                    <input type="submit" hidden/>
                    <div className="phuong-btn-group">
                      <input type="submit" className="btn btn-success" value="Save"/>
                      <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
          }
          <table className="table table-bordered company-table-respon table-hover table-sm table-striped table-fixed ">
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