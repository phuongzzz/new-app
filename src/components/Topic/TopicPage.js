import React from 'react';
import Topic from './Topic';
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore eos similique. Accusamus, amet asperiores blanditiis cupiditate eos nam nisi quae ratione rem ullam veritatis voluptatibus? Accusamus iure laudantium repellat!</p>
          </div>
        </div>
      </div>
    );
  }
});

export default TopicPage;