import React from 'react';
import { Link } from 'react-router';
import toastr from 'toastr';

const RegisteredTopic = React.createClass({

  handleUnregister(event) {
    event.preventDefault();
    // alert("nut chay roi ong :)");
    // this.props.removeRegisteredTopic(this.props.registered_topic.topic_id);
    this.props.removeRegisteredTopic(this.props.registered_topic.topic_id);
    this.props.addTopic(this.props.registered_topics);
    toastr.success("Unregister " + this.props.registered_topic.title + " done");
  },

  render() {

    const {registered_topic, i} = this.props;

    return (
      <div className="topic-box row">
        <div className="col-md-2 topic-title">
          <h6><Link to={`/topic/${registered_topic.topic_id}`}>{registered_topic.title}</Link></h6>
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
          <input type="button" className="btn btn-danger reg-btn" value="Unregister"
            onClick={this.handleUnregister}
          />
        </div>
      </div>
    );
  }
});

export default RegisteredTopic;