import React from 'react';
import Topic from './Topic';

const TopicPage = React.createClass({
  render() {
    return(
      <div>
        <h1>This is topic page</h1>
        {this.props.topics.map((topic, i) => <Topic {...this.props} key={i} i={i} topic={topic} />)} </div>
    );
  }
});

export default TopicPage;