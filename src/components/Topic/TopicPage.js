import React from 'react';
import Topic from './Topic';
import RegisteredTopic from './RegisteredTopic';
import './topic-page.css';

const TopicPage = React.createClass({

  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({search: event.target.value});
  },

  render() {

    let filteredTopics = this.props.topics.filter(
      (topic) => {
        return topic.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return(
      <div>
        <h1>Topics</h1>

        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <input type="text" className="form-control" placeholder="Search topics by title (programing language)..."
                   value={this.state.search}
                   onChange={this.updateSearch}/>
          </div>
        </div>

        <div className="row">
          <h4>Available Topics</h4>
          <div className="topics col-md-10 col-md-offset-1 topic-wrap">
            {filteredTopics.length !== 0 ?
              filteredTopics.map((topic, i) =>
                <Topic {...this.props} key={i} i={i} topic={topic} />) :
                <div>Nothing found</div>
            }
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