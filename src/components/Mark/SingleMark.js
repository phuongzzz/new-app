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
        <div className="col-md-3">
          <h4 className="text-center title-markfor">{mark.name}</h4>
          <img className="pie-chart" src="https://image.flaticon.com/icons/svg/235/235169.svg" alt=""/>
          <h6 className="text-class">{mark.class}</h6>
        </div>
        <div className="col-md-7 col-md-push-2 background-mark">
          <form ref="managerMarkForm" className="form-group" onSubmit={this.handleSubmit}>
            <hr/>
            <div className="col-md-11">
              <div className="mai-panel">
                <div className="panel">
                  <div className="panel-body">
                    <ul className="list-unstyled task-list">
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Company Rates</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="cstt" placeholder="Company Rates" className="form-control" defaultValue={mark.CSTT}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Time Checking</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="timechecking" placeholder="Time Checking" className="form-control" defaultValue={mark.timechecking}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Report</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="report" placeholder="Report" className="form-control" defaultValue={mark.report}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Demo</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="demo" placeholder="Demo" className="form-control" defaultValue={mark.demo}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Material</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="material" placeholder="Material" className="form-control" defaultValue={mark.material}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Material</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="material" placeholder="Material" className="form-control" defaultValue={mark.material}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>GPA</span>
                          </div>
                          <div className="col-md-8">
                            <input type="number" ref="gpa" placeholder="GPA" className="form-control" defaultValue={mark.GPA}/>
                          </div>
                        </div>
                      </li>
                      <hr/>
                      <li>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Result</span>
                          </div>
                          <div className="col-md-8">
                            <input type="text" ref="result" placeholder="Result" className="form-control" defaultValue={mark.Result}/>
                          </div>
                        </div>
                      </li>
                      <div className="col-md-2 col-md-push-7">
                        <input type="submit" className="btn btn-success btn-lg save-mark-btn" value="Save"/>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

});

export default SingleMark;