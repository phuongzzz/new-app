import React from 'react';
import './mark-page.css';
import { hashHistory } from 'react-router';

const SingleMark = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var markId = Number(this.props.params.markId);
   var cstt = Number(this.refs.cstt.value);
   var timechecking = Number(this.refs.timechecking.value);
   var report = Number(this.refs.report.value);
   var demo = Number(this.refs.demo.value);
   var material = Number(this.refs.material.value);
   var gpa = Number(this.refs.gpa.value);
   var result = this.refs.result.value;
   var mark = {markId, cstt, timechecking, report, demo, material, gpa, result};
   // alert(typeof markId);
   this.props.fixMark(mark);
   hashHistory.push("/marks");
  },

  render(){
    const { markId } = this.props.params;
    const i = this.props.marks.findIndex((mark) =>
      mark.id === parseInt(markId, 10));
    const mark = this.props.marks[i];

    return (
      <div className="row single-mark-wrap">
        <div className="col-md-8 col-md-offset-2">
          <h4 className="text-center">Manage marks for {mark.name}</h4>
          <form ref="managerMarkForm" className="form-group" onSubmit={this.handleSubmit}>
            <label>Company Rates</label>
            <input type="number" ref="cstt" placeholder="Company Rates" className="form-control" defaultValue={mark.CSTT}/>
            <label>Time checking</label>
            <input type="number" ref="timechecking" placeholder="Time Checking" className="form-control" defaultValue={mark.timechecking}/>
            <label>Report</label>
            <input type="number" ref="report" placeholder="Report" className="form-control" defaultValue={mark.report}/>
            <label>Demo</label>
            <input type="number" ref="demo" placeholder="Demo" className="form-control" defaultValue={mark.demo}/>
            <label>Material</label>
            <input type="number" ref="material" placeholder="Material" className="form-control" defaultValue={mark.material}/>
            <label>GPA</label>
            <input type="number" ref="gpa" placeholder="GPA" className="form-control" defaultValue={mark.GPA}/>
            <label>Result</label>
            <input type="text" ref="result" placeholder="Result" className="form-control" defaultValue={mark.Result}/>
            <input type="submit" hidden/>
            <input type="submit" className="btn btn-success btn-lg save-mark-btn" value="Save"/>
          </form>
        </div>
      </div>
    )
  }

});

export default SingleMark;