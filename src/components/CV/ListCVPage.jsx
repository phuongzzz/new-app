import React from 'react';
import { Link } from 'react-router';
import './listcv.css';
// import {Icon} from 'react-fa';

const ListCVPage = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="title">List CV</h3>
          {this.props.cvs.map((cv, i) =>
            <div className="col-md-6" key={i}>
              <div className="cv_list col-md-12">
                <div className="col-md-2 cv_img">
                  <img src={'http://craft-cv.com/image/en/65/online-cv-maker.png'} alt="boohoo"/>
                </div>
                <div className="col-md-8">
                  <div className="panel panel-headline">
                    <div className="panel-heading">
                      <span><a href=""><b>{cv.name}</b></a></span>
                      <span className="date_add_cv"><i className="lnr lnr-clock"></i> {cv.created_at}</span>
                    </div>
                    <div className="panel-body cv_action">
                      <span>
                        <Link to={`/cv/${cv.id}`}><button type="button" className="btn btn-info"> View</button></Link>
                        <button type="button" className="btn btn-inverse">Download</button>
                        <button type="button" className="btn btn-success">Approve
                          </button>
                      </span>
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