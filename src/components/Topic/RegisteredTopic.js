import React from 'react';
import toastr from 'toastr';
import _ from 'lodash';
import './registered_topic.css';

const RegisteredTopic = React.createClass({

  handleUnregister(event) {
    event.preventDefault();
    this.props.removeRegisteredTopic(this.props.registered_topic.topic_id);
    this.props.addTopic(this.props.registered_topics);
    toastr.success("Unregister " + this.props.registered_topic.title + " done");
  },

  handleApprove(event) {
    event.preventDefault();
    var current_registered_topic_id = this.props.registered_topic.topic_id;
    var topicToAssign = _.find(this.props.registered_topics, { topic_id: current_registered_topic_id });
    this.props.removeRegisteredTopic(current_registered_topic_id);
    this.props.addToAssignedTopic(topicToAssign)
    toastr.success("Done");
  },

  render() {
    const { registered_topic } = this.props;
    return (
      <tr>
        <td>{registered_topic.title}</td>
        <td>{registered_topic.description}</td>
        <td>{registered_topic.company_name}</td>
        <td>
          {(sessionStorage.getItem('role') === 'teacher_manager') &&
            <i className="fa fa-check-circle phuong-fa phuong-ok" onClick={this.handleApprove} aria-hidden="true"></i>
          }
          {(sessionStorage.getItem('role') === 'student') &&
            <i className="fa fa-trash phuong-fa phuong-trash" onClick={this.handleUnregister} aria-hidden="true"></i>
          }
        </td>
      </tr>
    );
  }
});

export default RegisteredTopic;
