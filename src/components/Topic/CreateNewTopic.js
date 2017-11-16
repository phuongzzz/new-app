import React from 'react';
import './create-new-topic.css';
import toastr from 'toastr';
import { hashHistory } from 'react-router';

const CreateNewTopic = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    var name = this.refs.name.value;
    // var topic_id = ++this.props.topics[this.props.topics.length - 1].topic_id;
    var lastTopic = this.props.topics[this.props.topics.length - 1];
    var lastTopicId = parseInt(lastTopic.topic_id, 10);
    var topic_id = lastTopicId += 6;
    var title = this.refs.title.value;
    var categories = this.refs.categories.value;
    var description = this.refs.description.value;
    var max = this.refs.max.value;
    var timelimit = this.refs.timelimit.value;
    var start = this.refs.start.value;
    var stop = this.refs.stop.value;
    var company_name = this.refs.company_name.value;
    var newTopic = {
      name, topic_id, title, categories, description, max, timelimit, start, stop,
      company_name
    }
    // alert(company_name);
    this.props.addNewTopic(newTopic);
    toastr.success("add new topic done!");
    hashHistory.push("/topics");
  },

  handleCancel(event) {
    event.preventDefault();
    alert("Cancel button is ready to use");
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h2>Create New Topic</h2>
          <form ref="addNewTopic" className="form-group add-topic" onSubmit={this.handleSubmit}>
            <label>Instructor's Name</label>
            <input type="text" ref="name" placeholder="Enter Instructor's Name" className="form-control" />
            <label>Topic's title</label>
            <input type="text" ref="title" placeholder="Enter topic's title" className="form-control" />
            <label>Topic's Categories</label>
            <input type="text" ref="categories" placeholder="Enter topic's categories" className="form-control" />
            <label>Topic's description</label>
            <input type="text" ref="description" placeholder="Enter topic's description" className="form-control" />
            <label>Topic's maximum of interns</label>
            <input type="number" ref="max" placeholder="Enter topic's maximum number of interns" className="form-control" />
            <label>Topic's time limit</label>
            <input type="text" ref="timelimit" placeholder="Enter topic's time limit" className="form-control" />
            <label>Topic's start date</label>
            <input type="text" ref="start" placeholder="Enter topic's start date" className="form-control" />
            <label>Topic's end date</label>
            <input type="text" ref="stop" placeholder="Enter topic's end date" className="form-control" />
            <label>Company Name</label>
            <input type="text" ref="company_name" placeholder="Enter company name for this topic" className="form-control" />

            <input type="submit" hidden />
            <div className="add-topic-center">
              <input type="submit" className="btn btn-success" value="Save" />
              <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default CreateNewTopic;
