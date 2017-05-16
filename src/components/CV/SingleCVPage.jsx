import React from "react";
import './SingleCVPage.css';
import ava from '../../../public/dist/img/avatar.png';

const SingleCVPage = React.createClass({
  render() {
    const { cvId } = this.props.params;
    console.log(cvId);
    const i = this.props.cvs.findIndex((cv) =>
    cv.id === parseInt(cvId, 10));
    //GET HIM!!!
    const cv = this.props.cvs[i];
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2 cv-details">
          <div className="row">
            <div className="col-md-7 cv-ava-label">
              <img src={ava} className="cv-ava-img" alt=""/>
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
                  <span><i className="fa fa-calendar"> {cv.dateofbirth}</i></span>
                </li>
                <br/>
                <li>
                  <span><i className="fa fa-user"> {cv.gender}</i></span>
                </li>
                <br/>
                <li>
                  <span><i className="fa fa-phone"> {cv.phone}</i></span>
                </li>
                <br/>
                <li>
                  <span><i className="fa fa-envelope"> {cv.email}</i></span>
                </li>
                <br/>
                <li>
                  <span><i className="fa fa-map-marker"> {cv.address}</i></span>
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
                <li>
                  <span>From: {cv.year_start} To: {cv.year_stop}</span>
                </li>
                <br/>
                <li>
                  <span>Grade: {cv.grade}</span>
                </li>
                <br/>
                <li>
                  <span>School: {cv.school}</span>
                </li>
                <br/>
                <li>
                  <span>Major: {cv.major}</span>
                </li>
                <br/>
                <li>
                  <span>CPA: {cv.cpa}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 cv-more-info-label">
              <p className="cv-label-title"><b>MORE INFORMATION</b></p>
              <span>
                <p className="long-text">
                  {cv.hobby}
                </p>
              </span>
            </div>
          </div>
          {/*end row 2*/}
          <hr/>
          <div className="row">
            <div className="col-md-7 cv-skill-label cv-left-part">
              <p className="cv-label-title"><b>SKILL</b></p>
              <ul className="list-unstyled">
                <li>
                  <span>
                      <p className="student-skill">{cv.majorskill}</p>
                  </span>
                  <span>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" role="progressbar"></div>
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                      <p className="student-skill">{cv.otherskill}</p>
                  </span>
                  <span>
                    <div className="progress cv-skill-list">
                      <div className="progress-bar" role="progressbar"></div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 cv-destination-label">
              <p className="cv-label-title"><b>DESTINATION</b></p>
              <span>
                <p className="long-text">
                  {cv.intent}
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
