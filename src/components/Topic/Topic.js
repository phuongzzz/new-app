import React from 'react';

const Topic = React.createClass({
  render() {

    const {topic, i} = this.props;

    return (
      <div>
        {topic.name}
      </div>
    );
  }
});

export default Topic;