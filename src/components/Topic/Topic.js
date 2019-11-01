import React from 'react';
import './topic.css';
import { Link } from 'react-router';
import toastr from 'toastr';

const Topic = React.createClass({

  handleRegister(event) {
    event.preventDefault();
    // alert("Click ok" + this.props.topic.topic_id);
    if (this.props.registered_topics.length <= 2) {
      console.log(this.props.registered_topics.length);
      this.props.removeTopic(this.props.topic.topic_id);
      this.props.addToRegisteredTopic(this.props.topic);
      toastr.success("Register " + this.props.topic.title + " done");
    }
    else {
      toastr.error("More than 3 topics? Are you a genius? ", {timeOut: 5000});
    }
  },

  render() {
    const {topic, i} = this.props;
    return (
      <div className="topic-box row">
        <div className="col-md-2 topic-title">
          <h6><Link to={`/topic/${topic.topic_id}`}>{topic.title}</Link></h6>
        </div>
        <div className="col-md-4 topic-description">
          <p>{topic.description}</p>
        </div>

        <div className="col-md-1 topic-description">
          <p>{topic.company_name}</p>
        </div>

        <div className="col-md-1 topic-description">
          <p>{topic.max}</p>
        </div>

        <div className="col-md-1 topic-description">
          <p>{topic.no_intern}</p>
        </div>

        <div className="col-md-1">
          <input type="button" className="btn btn-success reg-btn" value="Register"
            onClick={this.handleRegister}
          />
        </div>
        <div className="col-md-1">
          <input type="button" className="btn btn-primary reg-btn" value="Approve"/>
        </div>
      </div>
    );
  }
});

export default Topic;