import React from 'react';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const AddCompanyRespondingPage = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const username = this.refs.username.value;
    const name = this.refs.name.value;
    const phonenumber = this.refs.phonenumber.value;
    this.props.addUser(username, name, phonenumber);
    console.log(username, name, phonenumber);
    hashHistory.push('/users');
    toastr.success("Done");
  },


  render() {
    // var user = {};
    // const { userId } = this.props.params;
    // if (userId) {
    //   const i = this.props.users.findIndex((user) =>
    //   user.id === parseInt(userId, 10));
    //   //GET HIM!!!
    //   user = this.props.users[i];
    // }
    // else {
    //   user = {};
    //   // console.log(user);
    // }

    return (
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <h3 className="title">Add New Response</h3>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-6"><p className="response-label"><b>Student Name</b></p></div>
              <div className="col-md-6 student-info-input">
                <input type="text" ref="student-name" placeholder="Name" className="form-control student-form"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6"><p className="response-label"><b>Student Number</b></p></div>
              <div className="col-md-6 student-info-input">
                <input type="text" ref="student-number" placeholder="Student Number" className="form-control student-form"/>
            </div>
          </div>
        </div>
          <div className="col-md-8">
            <div className="col-md-2">
              <p className="response-label"><b>Response</b></p>
            </div>
            <div className="col-md-10  student-info-input">
              <textarea className="company-response-area" cols="60" rows="3" placeholder="Tell us about your internship in our company"></textarea>
            </div>
          </div>
      </div>
        <div className="col-md-4 col-md-offset-7">
          <div className="col-md-1 col-md-offset-10">
            <button type="button" className="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    );
  }
});

export default AddCompanyRespondingPage;