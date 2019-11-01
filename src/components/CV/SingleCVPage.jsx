import React from "react";
import './SingleCVPage.css';

const SingleCVPage = React.createClass({
  render() {

    const { cvId } = this.props.params;
    console.log(cvId);
    const i = this.props.cvs.findIndex((cv) =>
      cv.id === parseInt(cvId, 10));
    //GET HIM!!!
    const cv = this.props.cvs[i];

    var major_skill = {
      width: cv.majorskill_level + "%"
    }

    var other_skill = {
      width: cv.otherskill_level + "%"
    }

    return (
      <div className="container list-cv-container">
        <div className="col-md-8 col-md-offset-2 cv-details">
          <div className="row section odd-section">
            <div className="col-md-7 cv-ava-label">
              <img src={'https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg'} className="cv-ava-img" alt="" />
              <p className="cv-person-name "><b>{cv.name}</b></p>
              <p className="cv-position">
                <span><b>Position:</b></span>
                <span>{cv.position}</span>
              </p>
            </div>
            <div className="col-md-5 cv-contact-label">
              <p className="cv-label-title"><b>CONTACT</b></p>
              <ul className="list-unstyled">
                <li>
                  <span><strong>Date of birth:</strong> {cv.dateofbirth}</span>
                </li>
                <br />
                <li>
                  <span><strong>Gender:</strong> {cv.gender}</span>
                </li>
                <br />
                <li>
                  <span><strong>Phone number:</strong> {cv.phone}</span>
                </li>
                <br />
                <li>
                  <span><strong>Email:</strong> {cv.email}</span>
                </li>
                <br />
                <li>
                  <span><strong>Address:</strong> {cv.address}</span>
                </li>
              </ul>
            </div>
          </div>
          {/*end row */}
          <div className="row section">
            <div className="col-md-7 cv-education-label cv-left-part">
              <p className="cv-label-title"><b>EDUCATION</b></p>
              <ul className="list-unstyled">
                <li>
                  <span><strong>From:</strong> {cv.year_start} To: {cv.year_stop}</span>
                </li>
                <br />
                <li>
                  <span><strong>Grade</strong>: {cv.grade}</span>
                </li>
                <br />
                <li>
                  <span><strong>School</strong>: {cv.school}</span>
                </li>
                <br />
                <li>
                  <span><strong>Major</strong>: {cv.major}</span>
                </li>
                <br />
                <li>
                  <span><strong>CPA</strong>: {cv.cpa}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 cv-more-info-label">
              <p className="cv-label-title"><b>MORE INFORMATION</b></p>
              <span>
                <p className="long-text">
                  {cv.more_information}
                </p>
              </span>
            </div>
          </div>
          {/*end row 2*/}
          <div className="row section odd-section">
            <div className="col-md-7 cv-skill-label cv-left-part">
              <p className="cv-label-title"><b>SKILL</b></p>
              <ul className="list-unstyled">
                <li>
                  <span>
                    <p className="student-skill">{cv.majorskill}</p>
                  </span>
                  <span>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" style={major_skill} role="progressbar"></div>
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                    <p className="student-skill">{cv.otherskill}</p>
                  </span>
                  <span>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" style={other_skill} role="progressbar"></div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 cv-destination-label">
              <p className="cv-label-title"><b>DESTINATION</b></p>
              <span>
                <p className="long-text">
                  {cv.destination}
                </p>
              </span>
            </div>
          </div>
        </div>
        {/*end cv details*/}
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-1 col-md-offset-10">
            <button type="button" className="btn btn-success">Approve</button>
          </div>
        </div>
      </div>
    )
  }
});

export default SingleCVPage;
