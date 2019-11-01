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
    let backgroundStyle = {
      background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url("http://morepsd.com/wp-content/uploads/2015/10/Flat-Office-Desk-with-shadows-1024-750x422.png")',
      backgroundPosition: "center center"
    };
    console.log(topic.featured_pic)
    return (
      <div className="container phuong-topic">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="jumbotron phuong-j" style={backgroundStyle}>
              <h1>{topic.title}</h1>
              <p className="lead">{topic.description}</p>
              <p><a className="btn btn-lg btn-success" onClick={this.handleBack} role="button">Back and Register</a></p>
            </div>

            <div className="row marketing">
              <div className="col-lg-6">
                <h4>Category</h4>
                <p>{topic.categories}</p>

                <h4>Instructor</h4>
                <p>{topic.name}</p>

                <h4>Company Name</h4>
                <p>{topic.company_name}</p>
              </div>

              <div className="col-lg-6">
                <h4>Start</h4>
                <p>{topic.start}</p>

                <h4>End</h4>
                <p>{topic.stop}</p>

                <h4>Number of required internships</h4>
                <p>{topic.no_intern}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default SingleTopic;
