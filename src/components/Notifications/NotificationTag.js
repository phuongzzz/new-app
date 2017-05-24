import React from 'react';
import './noti-tag.css';
import { Link } from 'react-router';

const NotificationTag = React.createClass({
  render() {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const {noti} = this.props;
    return(
      <div className="noti-wrapper">
        <p><span className="noti-name">{noti.from}</span>&nbsp;
          {(noti.type === 'ADD_NEW_REQUEST') &&
          <span>wants to be a member, his (her) email is&nbsp;</span>
          }
          <span className="noti-email">{noti.email}</span>&nbsp;
          { (noti.type === 'ADD_NEW_REQUEST') &&
            <span className="noti-create"><Link to="/add-user">Create</Link> now!</span>
          }
        </p>
        {
          noti.message.length !== 0 && <p><span className="noti-message">Message: </span>"{noti.message}"</p>
        }
      </div>
    );
  }
});

export default NotificationTag;