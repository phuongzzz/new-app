import React from "react";
import {Icon} from 'react-fa';
import './SingleCVPage.css';

const SingleCVPage = React.createClass({
  render() {
    var c_skill = {
      width: '40%',
    };

    var java_skill = {
      width: '90%'
    }

    const { cvId } = this.props.params;
    const i = this.props.cvs.findIndex((cv) =>
    cv.id === parseInt(cvId, 10));
    const cv = this.props.cvs[i];
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2 cv-details">
          <div className="row">
            <div className="col-md-7 cv_ava_label">
              <img src={'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/16265197_1637576813218714_1150448365707028569_n.jpg?oh=563c3cdb8d9daf93495a5b595fe8ac2f&oe=59766BB6'} className="img-circle cv-ava-img" alt=""/>
                <p className="cv-person-name"><b>{cv.name}</b></p>
                <p className="cv-position">
                  <span><b>Position:</b></span>
                  <span>{cv.position}</span>
                </p>
            </div>
            <div className="col-md-5 cv-education-label">
              <p className="cv-education"><b>EDUCATION</b></p>
              <ul className="list-unstyled">
                <li>
                  <span>From:</span>
                  <span>{cv.year_start}</span>
                  <span>To:</span>
                  <span>{cv.year_stop}</span>
                </li>
                <br/>
                <li>
                  <span>Grade:</span>
                  <span>{cv.grade}</span>
                </li>
                <br/>
                <li>
                  <span>School:</span>
                  <span>{cv.school}</span>
                </li>
                <br/>
                <li>
                  <span>Major:</span>
                  <span>{cv.major}</span>
                </li>
              </ul>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-7 cv-contact-label">
              <p className="cv_contact"><b>CONTACT</b></p>
              <ul className="list-unstyled">
                <li>
                  <span><i className="fa fa-calendar"></i>{cv.dateofbirth}</span>
                </li>
                <li>
                  <span><i className="fa fa-user"> {cv.gender}</i></span>
                </li>
                <li>
                  <span><i className="fa fa-phone"> {cv.phone}</i></span>
                </li>
                <li>
                  <span><i className="fa fa-envelope"> {cv.email}</i></span>
                </li>
                <li>
                  <span><i className="fa fa-map-marker"> {cv.address}</i></span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 cv-more-info-label">
              <p className="cv-more-info"><b>MORE INFORMATION</b></p>
              <span>
                <p>
                  {cv.hobby}
                </p>
              </span>
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-md-7 cv-skill-label">
              <p className="cv-skill"><b>SKILL</b></p>
              <ul className="list-unstyled">
                <li>
                  <span>
                      <p>{cv.majorskill}</p>
                  </span>
                  <span>
                    <div className="progress cv_skill_list">
                      <div className="progress-bar" role="progressbar" style={java_skill}></div>
                    </div>
                  </span>
                </li>
                <li>
                  <span>
                      <p>{cv.otherskill}</p>
                  </span>
                  <span>
                    <div className="progress cv_skill_list">
                      <div className="progress-bar" role="progressbar" style={c_skill}></div>
                    </div>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-5 cv-destination-label">
              <p className="cv-destination"><b>DESTINATION</b></p>
              <span>
                {cv.intent}
              </span>
            </div>
          </div>
        </div>
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
