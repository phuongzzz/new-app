import React from 'react';
// import { Link } from 'react-router';
import toastr from 'toastr';
import _ from 'lodash';

const RegisteredTopic = React.createClass({

  handleUnregister(event) {
    event.preventDefault();
    // alert("nut chay roi ong :)");
    this.props.removeRegisteredTopic(this.props.registered_topic.topic_id);
    this.props.removeRegisteredTopic(this.props.registered_topic.topic_id);
    // this.props.addTopic(this.props.registered_topics);
    toastr.success("Unregister " + this.props.registered_topic.title + " done");
  },

  handleApprove(event) {
    event.preventDefault();
    // this.props.removeRegisteredTopic(this.props.registered_topic.topic_id);
    // var topicToAssign = _.find(this.props.registered_topics, {topic_id: this.props.registered_topics.topic_id});
    // alert(topicToAssign.name);
    var current_registered_topic_id = this.props.registered_topic.topic_id;
    var topicToAssign = _.find(this.props.registered_topics, {topic_id: current_registered_topic_id});
    this.props.removeRegisteredTopic(current_registered_topic_id);
    this.props.addToAssignedTopic(topicToAssign)
    // alert(current_registered_topic_id);
    // this.props.addToAssignedTopic(this.props.registered_topics);
    toastr.success("Done");
  },

  render() {

    const {registered_topic} = this.props;

    return (
      <div className="topic-box row">
        <div className="col-md-2 topic-title">
          <h6>{registered_topic.title}</h6>
        </div>
        <div className="col-md-4 topic-description">
          <p>{registered_topic.description}</p>
        </div>

        <div className="col-md-1 topic-description">
          <p>{registered_topic.company_name}</p>
        </div>

        <div className="col-md-1 topic-description">
          <p>{registered_topic.max}</p>
        </div>

        <div className="col-md-1 topic-description">
          <p>{registered_topic.no_intern}</p>
        </div>

        <div className="col-md-1 col-md-offset-1">
          {(sessionStorage.getItem('role') === 'teacher_manager') &&
            <input type="button" className="btn btn-success" value="Approve"
              onClick={this.handleApprove}/>
          }
          {(sessionStorage.getItem('role') === 'student') &&
          <input type="button" className="btn btn-danger reg-btn" value="Unregister"
                 onClick={this.handleUnregister}/>
          }
        </div>
      </div>
    );
  }
});

export default RegisteredTopic;