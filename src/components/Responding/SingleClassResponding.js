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
      toastr.error("Cancelled adding response");
    }
  },

  handleSubmit(e) {
    var last_class_response_id = parseInt(
      this.props.class_respondings[this.props.class_respondings.length - 1].id, 10);
    var next_class_response_id = ++last_class_response_id;

    const id = next_class_response_id;
    const company = this.refs.company.value;
    const student = this.refs.student.value;
    const mssv = this.refs.mssv.value;
    const responding = this.refs.responding.value;
    const class_name = this.refs.class_name.value;

    this.props.addNewClassResponse(id, company,
      student, mssv, responding, class_name);
    this.setState({ showResponse: !this.state.showResponse });
    toastr.success("Thanks " + student + " for response");
  },

  render(){
    const { className } = this.props.params;
    // const classIndex = this.props.class_respondings.findIndex((class_responding) =>
    // class_responding.class_name === parseInt(className,10));

    const class_filters = this.props.class_respondings.filter(
      class_responding => class_responding.class_name === className);

    return(
      <div className="row-responding">
        <div className="col-md-6 col-md-offset-1">
          <br/>
          <h6 className="align">
            <span className="fa fa-home">&nbsp;FORUM:
              <span>Responses of {className}</span></span>
          </h6>

          <table className="table table-bordered company-table-respon table-hover table-sm table-striped table-fixed ">
            <thead className="content-company">
            <tr>
              <th className="text-left">Responding</th>
              <th className="text-left">Company</th>
              <th className="text-left">Mssv</th>
              <th className="text-left">Student</th>
            </tr>
            </thead>
            <tbody>
            {class_filters.map((class_respon, i) =>
              <tr className="size-i" key={i}>
                <td className="phuong-response">
                  <span className="fa fa-envelope-open mai-document"></span>
                  &nbsp;&nbsp;
                  <a className="color-a">{class_respon.responding}</a>
                  </td>
                <td>{class_respon.company}</td>
                <td>{class_respon.mssv}</td>
                <td>{class_respon.student}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <br/><br/><br/><br/><br/>
          {sessionStorage.getItem('role') === 'student' &&
          <span onClick={this.onClick}>
            <img className="img-add" src="http://icons.iconarchive.com/icons/hopstarter/button/32/Button-Add-icon.png" alt=""/>
            &nbsp; &nbsp;
            Add new response</span>
          }
          {
            this.state.showResponse &&
            <div className="row">
              <div className="col-md-8 col-md-offset-2 phuong-left-align">
                <form ref="addNewResponseForm" className="form-group" onSubmit={this.handleSubmit}>
                  <input type="text" ref="class_name" hidden value={className} readOnly/>
                  <label>Company</label>
                  <input type="text" ref="company" placeholder="Enter your company's name"
                         className="form-control"/>
                  <label>Student's Name</label>
                  <input type="text" ref="student" placeholder="Enter your name"
                         className="form-control"/>
                  <label>Student's Id</label>
                  <input type="text" ref="mssv" placeholder="Enter your student id"
                         className="form-control"/>
                  <label>Response content</label>
                  <input type="text" ref="responding" placeholder="Enter your responding"
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
        </div>
      </div>
    )
  }
});


export default SingleClassResponding;