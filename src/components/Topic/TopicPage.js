import React from 'react';
import RegisteredTopic from './RegisteredTopic';
import './topic-page.css';
import { Link } from 'react-router';
import toastr from 'toastr';
import _ from 'lodash';

const TopicPage = React.createClass({

  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({ search: event.target.value });
  },

  handleRegister(topic_id) {
    if (this.props.registered_topics.length <= 2) {
      var topicToAdd = _.find(this.props.topics, { topic_id: topic_id });
      this.props.removeTopic(topic_id);
      this.props.addToRegisteredTopic(topicToAdd);
      toastr.success("Register " + topicToAdd.title + " done");
    }
    else {
      toastr.error("More than 3 topics? Are you a genius? ", { timeOut: 5000 });
    }
  },

  render() {
    var role = sessionStorage.getItem('role');
    let filteredTopics = this.props.topics.filter(
      (topic) => {
        return topic.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div>
        <div className="row new-btn-row">
          <div className="container">
            {
              (sessionStorage.getItem('role') === 'company_agent') &&
              <Link to="/create-topic" className="btn btn-success">Create new topic</Link>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4>Available Topics</h4>
          </div>
          <div className="col-md-5 col-md-offset-1">
            <div className="row span12">
              <div className="col-md-4 col-md-offset-3 mai-col">
                <input type="text" className="form-control mai-form-control search-box" placeholder="Search topics by title (programing language)..."
                  value={this.state.search}
                  onChange={this.updateSearch} />
              </div>
              <div className="col-md-1 mai-search">
                <i className="fa fa-search mai-fa-search"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1 ">
            <div className="topics">
              <table className="table table-hover table-striped table-bordered">
                <thead className="">
                  <tr>
                    <th>Topic title</th>
                    <th>Description</th>
                    <th>Company Name</th>
                    <th>Max No.interns</th>
                    <th>No. registered</th>
                    <th>Register</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTopics.length !== 0 ?
                    filteredTopics.map((topic, i) =>
                      <tr key={i}>
                        <td><Link to={`/topic/${topic.topic_id}`}>{topic.title}</Link></td>
                        <td>{(topic.description.length > 20) ?
                          topic.description.slice(0, 20) + "..." :
                          topic.description}</td>
                        <td>{topic.company_name}</td>
                        <td>{topic.max}</td>
                        <td>{topic.no_intern}</td>
                        {((role === 'student') || (role === 'teacher_manager')) ?
                          <td>
                            {(role === 'student') &&
                              <i className="fa fa-pencil-square-o phuong-pencil"
                                onClick={this.handleRegister.bind(this, topic.topic_id)}>
                              </i>

                            }
                            {(role === 'teacher_manager') &&
                              <input type="button" className="btn btn-mini btn-primary reg-btn" value="Approve" />
                            }
                          </td> :
                          <td>
                            <p>Not authorized</p>
                          </td>
                        }
                      </tr>
                    ) : <tr>Nothing found</tr>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <h4>Registered Topics</h4>
          <div className="col-md-10 col-md-offset-1">
            {/* {this.props.registered_topics.length !== 0 ?
              this.props.registered_topics.map((registered_topic, i) =>
                <RegisteredTopic {...this.props} key={i} i={i} registered_topic={registered_topic} />) :
              <div>You haven't registered any topic yet :( </div>
            } */}
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Topic Title</th>
                  <th>Description</th>
                  <th>Company Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.props.registered_topics.length !== 0 ?
                  this.props.registered_topics.map((registered_topic, i) =>
                    <RegisteredTopic {...this.props} key={i} i={i} registered_topic={registered_topic} />) :
                  <tr>
                    <td colSpan="4">
                      You haven't registered any topic yet :(
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

export default TopicPage;
