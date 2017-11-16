import React from 'react';
import './create-new-topic.css';
import toastr from 'toastr';
import { hashHistory } from 'react-router';

const CreateNewTopic = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    var name = this.refs.name.value;
    var nextTopicId = ++this.props.topics[this.props.topics.length - 1].topic_id;
    var title = this.refs.title.value;
    var categories = this.refs.categories.value;
    var description = this.refs.description.value;
    var max = this.refs.max.value;
    var timelimit = this.refs.timelimit.value;
    var start = this.refs.start.value;
    var stop = this.refs.stop.value;
    var company_name = this.refs.company_name.value;
    var newTopic = {
      name, nextTopicId, title, categories, description, max, timelimit, start, stop,
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
    return(
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <h2>Create New Topic</h2>
          <form ref="addNewTopic" className="form-group add-topic" onSubmit={this.handleSubmit}>
            <div className="col-md-5">
              <div className="mai-panel">
                <div className="panel">
                  <div className="panel-body">
                    <ul className="list-unstyled task-list">
                      <li>
                        <div className="row">
                          <div className="col-md-4"><span>Instructor's Name(*)</span></div>
                          <div className="col-md-8">
                            <input type="text" ref="name" required placeholder="Enter Instructor's Name" className="form-control"/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4"><span>Topic's title(*)</span></div>
                          <div className="col-md-8">
                            <input type="text" ref="title" required placeholder="Enter topic's title" className="form-control"/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4"><span>Topic's Catogories(*)</span></div>
                          <div className="col-md-8">
                            <input type="text" ref="categories" required placeholder="Enter topic's categories" className="form-control"/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4"><span>Company Name(*)</span></div>
                          <div className="col-md-8">
                            <input type="text" ref="company_name" required placeholder="Enter company name for this topic" className="form-control"/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4"><span>Maximum of interns(*)</span></div>
                          <div className="col-md-8">
                            <input type="number" ref="max" required placeholder="Enter topic's maximum number of interns" className="form-control"/>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">              <div className="mai-panel">
              <div className="panel">
                <div className="panel-body">
                  <ul className="list-unstyled task-list">
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Topic's time limit(*)</span></div>
                        <div className="col-md-8">
                          <input type="text" ref="timelimit" required placeholder="Enter topic's time limit" className="form-control"/>
                        </div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Topic's start date(*)</span></div>
                        <div className="col-md-8">
                          <input type="date" ref="start" required placeholder="Enter topic's start date" className="form-control"/>
                        </div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Topic's end date(*)</span></div>
                        <div className="col-md-8">
                          <input type="date" ref="stop" required placeholder="Enter topic's start date" className="form-control"/>
                        </div>
                      </div>
                    </li>
                    <hr/>
                    <li>
                      <div className="row">
                        <div className="col-md-4"><span>Topic's description</span></div>
                        <div className="col-md-8">
                          <input type="text" ref="description" required placeholder="Enter topic's description" className="form-control mai-description"/>
                        </div>
                      </div>
                    </li>
                    <hr/>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            <input type="submit" hidden/>
            <div className="add-topic-center">
              <input type="submit" className="btn btn-success" value="Save"/>
              <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default CreateNewTopic;