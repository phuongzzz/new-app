import React from 'react';
import './AddCVPage.css';
import { hashHistory } from 'react-router';
import toastr from 'toastr';

const AddCVPage = React.createClass({

  getInitialState() {
    return {
      majorskill: {
        width: '90%'
      },
      otherskill: {
        width: '40%'
      }
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    // const username = this.refs.username.value;
    // const name = this.refs.name.value;
    // const phonenumber = this.refs.phonenumber.value;
    // this.props.addUser(username, name, phonenumber);
    // console.log(username, name, phonenumber);
    // hashHistory.push('/users');
    // toastr.success("Done");
  },

  handleMajorChange(e) {
    e.preventDefault();
    if (e.target.value > 100) {
      toastr.error("wrong number of Major change");
    }
    var skill_progress = e.target.value + "%";
    let newMajorSkill = this.state.majorskill;
    newMajorSkill.width = skill_progress;
    this.setState({majorskill: newMajorSkill});
  },

  handleOtherChange(e) {
    e.preventDefault();
    if (e.target.value > 100) {
      toastr.error("wrong number");
    }
    var skill_progress = e.target.value + "%";
    let newOtherSkill = this.state.otherskill;
    newOtherSkill.width = skill_progress;
    this.setState({otherskill: newOtherSkill});
  },


  render() {

    return (
      <div className="container">
          <div className="col-md-8 col-md-offset-2 cv-details">
            <form ref="addCVForm" className="form-group addCVForm" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-7 cv-ava-label">
                <img src={'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/16265197_1637576813218714_1150448365707028569_n.jpg?oh=563c3cdb8d9daf93495a5b595fe8ac2f&oe=59766BB6'} className="cv-ava-img" alt=""/>
                <input type="text" ref="name" placeholder="Insert You Name Here" className="form-control student-name phuong-center-input"/>
                <p className="cv-position">
                  <span><b>Position:</b></span>
                  <span><input type="text" ref="student-position" placeholder="Insert Your Internship Position Here" className="form-control student-position"/></span>
                </p>
              </div>
              <div className="col-md-5 cv-contact-label">
                <p className="cv-label-title"><b>CONTACT</b></p>
                <ul className="list-unstyled">
                  <li>
                    <span><input type="text" ref="student-birthday" placeholder="Birthday: DD/MM/YYYY" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="student-gender" placeholder="Gender: Male/Female" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="student-phone" placeholder="Phone Number" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="student-email" placeholder="Email" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="student-address" placeholder="Address" className="form-control student-contact"/></span>
                  </li>
                </ul>
              </div>
            </div>
            {/*end row */}
            <hr/>
            <div className="row">
              <div className="col-md-7 cv-education-label cv-left-part">
                <p className="cv-label-title"><b>EDUCATION</b></p>
                <ul className="list-unstyled">
                  <li className="edu">
                    <div className="row">
                      <div className="col-md-2"><p>From</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="student-start-year" placeholder="Start Year" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>To</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="student-start-year" placeholder="Stop Year" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>Grade</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="student-grade" placeholder="Grade" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>School</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="student-school" placeholder="School" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>Major</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="student-major" placeholder="Major" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>CPA</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="student-cpa" placeholder="CPA in School" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 cv-more-info-label">
                <p className="cv-label-title"><b>MORE INFORMATION</b></p>
                <textarea className="cv-textarea form-control" cols="28" rows="16" placeholder="Tell us more about yourself"></textarea>
              </div>
            </div>
            {/*end row 2*/}
            <hr/>
            <div className="row">
              <div className="col-md-7 cv-skill-label cv-left-part">
                <p className="cv-label-title"><b>SKILL</b></p>
                <ul className="list-unstyled">
                  <li>
                    <p><input type="text" ref="majorskill" placeholder="Major Skill" className="form-control student-skill"/></p>
                    <input className="form-control" name="majorskill" type="number" ref="major-skill-indicator" placeholder="Rate your major skill (out of 100)" onChange={this.handleMajorChange}/>
                    <br/>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" style={{...this.state.majorskill}} role="progressbar"></div>
                    </div>
                  </li>
                  <li>
                    <p><input type="text" ref="student_other_skill" placeholder="Other Skill" className="form-control student-skill"/></p>
                    <input className="form-control" type="number" ref="other-skill-indicator" placeholder="Rate your other skill (out of 100)" onChange={this.handleOtherChange}/>
                    <br/>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" style={{...this.state.otherskill}} role="progressbar"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 cv-destination-label">
                <p className="cv-label-title"><b>DESTINATION</b></p>
                <textarea className="cv-textarea form-control" cols="28" rows="6" placeholder="Tell us more about your destination"></textarea>
              </div>

            </div>
            </form>

          </div>
  {/*end cv details*/}
          <div className="col-md-8 col-md-offset-2">
            <div className="col-md-1 col-md-offset-10">
              <button type="button" className="btn btn-success">Approve</button>
            </div>
          </div>
      </div>
    );
  }
});

export default AddCVPage;