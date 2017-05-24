import React from 'react';
import './contact-form.css';
import { hashHistory } from 'react-router';
import toastr from 'toastr';
import _ from 'lodash';

const ContactForm = React.createClass({

  confirmCancel(e) {
    e.preventDefault();
    if(confirm("Are you sure? Your entered values will be lost!")) {
      hashHistory.push("/");
      toastr.error("Account request is cancelled",{timeOut: 6000});
    }
  },

  handleSubmit(e) {
    e.preventDefault();
    var name = this.refs.name.value;
    var email = this.refs.email.value;
    var message = this.refs.message.value;
    // alert(typeof name);
    // alert(typeof name);
    // toastr.success("done");
    if ((name.length === 0) || (email.length === 0)) {
      toastr.error("Double check your name or email, or both :)");
    }
    else if(_.parseInt(name) || _.parseInt(email)){
      toastr.error("Double check your name or email, or both :)");
    }
    else {
      var all_notifications = this.props.notifications;
      var admin_notifications_object = _.find(all_notifications, {username: "admin"});
      var admin_notifies = admin_notifications_object.notifies;
      var last_notifies_id = parseInt(admin_notifies[admin_notifies.length - 1].notification_id, 10);
      var notification_id = ++last_notifies_id;
      var notification_obj = {
        notification_id,
        name,
        email,
        message
      }

      this.props.pushNotificationToAdmin(notification_obj);

      // console.log(this.props.notifications.length);
      // hashHistory.push("/");
      toastr.success("Your request has been sent, admin will email you soon :)")
    }
    // else {
    //   toastr.success("done");
    // }
  },

  render() {
    return (
      <div className="contact-form-wrapper">
        <h4>Create account request form</h4>
        <p>Enter form below and admin will be notified to create your account</p>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form ref="contactForm" className="form-group" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" ref="name" placeholder="Which name should admin will use to call you?" className="form-control" />
              <br/>
              <label>Email</label>
              <br/>
              <input type="email" ref="email" placeholder="Enter your email, admin will notify you via this address" className="form-control"/>
              <br/>
              <label>Your Message (Optional)</label>
              <textarea rows={5} type="text" ref="message" placeholder="Enter your message (optional). Example: am I that easy to forget? :(" className="form-control"/>
              <input type="submit" hidden/>
              <br/>
              <div className="center-box">
                <input type="submit" className="btn btn-success-custom btn-lg" value="Send Now!"/>
                <button className="btn btn-danger-custom btn-lg" onClick={this.confirmCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default ContactForm;