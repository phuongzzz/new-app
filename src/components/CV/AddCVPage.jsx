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
    var lastCV = this.props.cvs[this.props.cvs.length - 1];
    var lastCVIndex = parseInt(lastCV.id, 10);
    var cvId = lastCVIndex += 1;
    var name = this.refs.name.value;
    var position = this.refs.position.value;
    var dateofbirth = this.refs.dateofbirth.value;
    var gender = this.refs.gender.value;
    var phone = this.refs.phone.value;
    var email = this.refs.email.value;
    var address = this.refs.address.value;
    var year_start = this.refs.year_start.value;
    var year_stop = this.refs.year_stop.value;
    var grade = this.refs.grade.value;
    var school = this.refs.school.value;
    var major = this.refs.major.value;
    var cpa = this.refs.cpa.value;
    var more_information = this.refs.more_information.value;
    var majorskill = this.refs.majorskill.value;
    var majorskill_level = parseInt(this.refs.majorskill_level.value,10);
    var otherskill = this.refs.otherskill.value;
    var otherskill_level = parseInt(this.refs.otherskill_level.value, 10);
    var destination = this.refs.destination.value;

    this.props.addNewCV(cvId, name, position, dateofbirth, gender, phone, email,
    address, year_start, year_stop, grade, school, major, cpa, more_information,
    majorskill, majorskill_level, otherskill, otherskill_level, destination);

    hashHistory.push('/listcv');
    toastr.success("Created CV for " + name);
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

  handleCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure?")) {
      hashHistory.push("/listcv");
      toastr.error("Cancelled creating cv");
    }
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
                  <span><input type="text" ref="position" placeholder="Insert Your Internship Position Here" className="form-control student-position"/></span>
                </p>
              </div>
              <div className="col-md-5 cv-contact-label">
                <p className="cv-label-title"><b>CONTACT</b></p>
                <ul className="list-unstyled">
                  <li>
                    <span><input type="text" ref="dateofbirth" placeholder="Birthday: DD/MM/YYYY" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="gender" placeholder="Gender: Male/Female" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="phone" placeholder="Phone Number" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="email" placeholder="Email" className="form-control student-contact"/></span>
                  </li>
                  <br/>
                  <li>
                    <span><input type="text" ref="address" placeholder="Address" className="form-control student-contact"/></span>
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
                        <input type="text" ref="year_start" placeholder="Start Year" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>To</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="year_stop" placeholder="Stop Year" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>Grade</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="grade" placeholder="Grade" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>School</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="school" placeholder="School" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>Major</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="major" placeholder="Major" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                  <br/>
                  <li>
                    <div className="row">
                      <div className="col-md-2"><p>CPA</p></div>
                      <div className="col-md-10">
                        <input type="text" ref="cpa" placeholder="CPA in School" className="form-control student-education"/>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 cv-more-info-label">
                <p className="cv-label-title"><b>MORE INFORMATION</b></p>
                <textarea ref="more_information" className="cv-textarea form-control" cols="28" rows="16" placeholder="Tell us more about yourself"></textarea>
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
                    <input className="form-control" name="majorskill" type="number" ref="majorskill_level" placeholder="Rate your major skill (out of 100)" onChange={this.handleMajorChange}/>
                    <br/>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" style={{...this.state.majorskill}} role="progressbar"></div>
                    </div>
                  </li>
                  <li>
                    <p><input type="text" ref="otherskill" placeholder="Other Skill" className="form-control student-skill"/></p>
                    <input className="form-control" type="number" ref="otherskill_level" placeholder="Rate your other skill (out of 100)" onChange={this.handleOtherChange}/>
                    <br/>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" style={{...this.state.otherskill}} role="progressbar"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 cv-destination-label">
                <p className="cv-label-title"><b>DESTINATION</b></p>
                <textarea ref="destination" className="cv-textarea form-control" cols="28" rows="6" placeholder="Tell us more about your destination"></textarea>
              </div>
            </div>
              <button onClick={this.handleSubmit} className="btn btn-success">Create</button>
              <button onClick={this.handleCancel} className="btn btn-danger">Cancel</button>
            </form>
          </div>
      </div>
    );
  }
});

export default AddCVPage;