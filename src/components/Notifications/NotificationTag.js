import React from 'react';
import './noti-tag.css';

const NotificationTag = React.createClass({
  render() {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const {noti} = this.props;
    return(
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="noti-tag">
            <h4>{noti.type}</h4>
            <h6>at: {utc}</h6>
            <div className="noti-content">
              <div className="row">
                <div className="col-md-6">
                  <p className="noti-name">From: {noti.name}</p>
                  <p className="noti-email">Email: {noti.email}</p>
                </div>
                <div className="col-md-6">
                  <p className="noti-message">Message: {noti.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default NotificationTag;