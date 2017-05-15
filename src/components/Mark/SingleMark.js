import React from 'react';
import './mark-page.css';
import {Link} from 'react-router';

const SingleMark = React.createClass({
    render(){
        const { markId } = this.props.params;
        const i = this.props.marks.findIndex((mark) =>
        mark.id === parseInt(markId, 10));
        //GET HIM!!!
        const mark = this.props.marks[i];

        return (
            <div>
                <h6>Hello</h6>
            </div>
        )
    }

});

export default SingleMark;