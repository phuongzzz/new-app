import React from 'react';
import './single-topic.css';


const SingleTopic = React.createClass({
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
            <p>{topic.}</p>
            <hr/>
          </div>

          <div className="content-box">
            <h4>Topic name</h4>
            <p>{topic.}</p>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
});

export default SingleTopic;