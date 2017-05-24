import React from 'react';
import './mark-page.css';

const SingleMark = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
//    var cstt = this.refs.cstt.value;
//    var timechecking = this.refs.timechecking.value;
//    var report = this.refs.report.value;
//    var demo = this.refs.demo.value;
//    var material = this.refs.material.value;
//    var gpa = this.refs.gpa.value;
//    var result = this.refs.result.value;
//    console.log(report + demo);
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