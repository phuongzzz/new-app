import React from 'react';
import { Link } from 'react-router';
import './listcv.css';
// import {Icon} from 'react-fa';

const ListCVPage = React.createClass({
  render() {
    return (
      <div className="container listcv-container">
        <div className="row">
          <h3 className="title">List CV</h3>
          <div className="row">
            {(sessionStorage.getItem('role') === 'student') &&
              <Link to="/addnewcv">
                <button className="btn btn-success add-cv-btn">Add new</button>
              </Link>
            }
          </div>
          {this.props.cvs.map((cv, i) =>
            <div className="col-md-6" key={i}>
              <div className="cv_list col-md-12">
                <div className="col-md-5 cv_img">
                  <img src={'http://craft-cv.com/image/en/65/online-cv-maker.png'} alt="boohoo" />
                  <div className="panel-body cv_action">
                    <span>
                      <Link to={`/cv/${cv.id}`}><button type="button" className="btn btn-info btn-xs"><span className="fa fa-eye"></span> View</button></Link>
                      <button type="button" className="btn btn-primary btn-xs"><span className="fa fa-download"></span> Download</button>
                    </span>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="panel panel-headline">
                    <div className="panel-heading cv-info">
                      <strong>Student's Name: </strong><p>{cv.name}</p>
                      <strong>Position: </strong><p>{cv.position}</p>
                      <strong>School: </strong><p>{cv.school}</p>
                      <strong>Major</strong><p>{cv.major}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    )
  }
});

export default ListCVPage;
