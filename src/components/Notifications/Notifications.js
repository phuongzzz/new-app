import React from 'react';
import NotificationTag from './NotificationTag';
import _ from 'lodash';

const Notifications = React.createClass({
  render() {
    var all_notifications = this.props.notifications;
    const current_user = sessionStorage.getItem('username');
    var current_user_notifications = _.filter(all_notifications, {username: current_user});
    var current_user_notification_reverse = current_user_notifications.reverse();
    return (
      <div className="container">
        <h6 className="noti-header">Your Notifications</h6>
        {current_user_notification_reverse.map((noti, i) => <NotificationTag key={i} noti={noti}/>)}
      </div>
    )
  }
});

export default Notifications;