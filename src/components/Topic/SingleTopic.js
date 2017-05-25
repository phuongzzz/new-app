import React from 'react';
import './single-topic.css';
import { hashHistory } from 'react-router';

const SingleTopic = React.createClass({

  handleBack(e) {
    e.preventDefault();
    hashHistory.push("/topics");
  },

  render() {
    const { topicId } = this.props.params;
    const i = this.props.topics.findIndex((topic) =>
    topic.topic_id === parseInt(topicId, 10));
    //GET HIM!!!
    const topic = this.props.topics[i];
    console.log(topic);
    return(
      <div className="row">
        <div className="single-topic-box col-md-8 col-md-offset-2">
          <div className="content-box">
            <h4>Topic name</h4>
            <p>{topic.title}</p>
            <hr/>
          </div>

          <div className="content-box">
            <h4>Categories</h4>
            <p>{topic.categories}</p>
            <hr/>
          </div>

          <div className="content-box">
            <h4>Company</h4>
            <p>{topic.company_name}</p>
            <hr/>
          </div>

          <div className="content-box">
            <h4>Instructor</h4>
            <p>{topic.name}</p>
            <hr/>
          </div>

          <div className="content-box">
            <h4>Description</h4>
            <p>{topic.description}</p>
            <hr/>
          </div>

          <div className="content-box ">
            <button className="btn btn-success"
            onClick={this.handleBack}>Back to topics</button>
          </div>

        </div>
      </div>
    );
  }
});

export default SingleTopic;