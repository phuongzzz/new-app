import React from 'react';
import './topic.css';
import { Link } from 'react-router';

const Topic = React.createClass({
    render() {

        const {topic, i} = this.props;


        return (
            <div className="topic-box row">
                <div className="col-md-2 topic-title">
                    <h6><Link to={`/topic/${topic.topic_id}`}>{topic.title}</Link></h6>
                </div>
                <div className="col-md-4 topic-description">
                    <p>{topic.description}</p>
                </div>

                <div className="col-md-1 topic-description">
                    <p>{topic.company_name}</p>
                </div>

                <div className="col-md-1 topic-description">
                    <p>{topic.max}</p>
                </div>

                <div className="col-md-1 topic-description">
                    <p>{topic.no_intern}</p>
                </div>

                <div className="col-md-1">
                    <input type="button" className="btn btn-success reg-btn" value="Register"/>
                </div>
                <div className="col-md-1">
                    <input type="button" className="btn btn-primary reg-btn" value="Approve"/>
                </div>
            </div>
        );
    }
});

export default Topic;