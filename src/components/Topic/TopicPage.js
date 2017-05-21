import React from 'react';
import Topic from './Topic';
import RegisteredTopic from './RegisteredTopic';
import './topic-page.css';

const TopicPage = React.createClass({
  render() {
    return(
      <div>
        <h1>This is topic page</h1>
        <div className="row">
          <h4>Available Topics</h4>
          <div className="topics col-md-10 col-md-offset-1 topic-wrap">
            {this.props.topics.map((topic, i) => <Topic {...this.props} key={i} i={i} topic={topic} />)}
          </div>
        </div>
        <hr/>
        <div className="row">
          <h4>Registered Topics</h4>
          <div className="registered-topics col-md-10 col-md-offset-1">
            {this.props.registered_topics.length !== 0 ?
            this.props.registered_topics.map((registered_topic, i) =>
              <RegisteredTopic {...this.props} key={i} i={i} registered_topic={registered_topic} />) :
              <div>You haven't registered any topic yet :( </div>
            }
          </div>
        </div>
      </div>
    );
  }
});

export default TopicPage;