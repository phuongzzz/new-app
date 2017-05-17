import React from 'react';
import './InternshipSchedulePage.css';
import { Link } from 'react-router';

const InternshipSchedulePage = React.createClass({
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12 topic-name">
            <h4>{this.props.schedules.topic_name}</h4>
          </div>
        </div>
        <div className="row week-job">
          <ul className="card-list truncated list-unstyled">
            {this.props.schedules.data.map((schedule, i) =>
              <li className="cuong-card" key={i}>
                <Link className="card-box">
                  <div className="card-progress">
                    <h5>{schedule.time}</h5>
                  </div>
                  <strong className="card-type">To do this week</strong>
                  <h6 className="card-title">{schedule.job_name}</h6>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
});

export default InternshipSchedulePage;