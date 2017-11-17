import React from 'react';
import './mark-page.css';
import {Link} from 'react-router';

// import { printJS } from 'print.js/';


const MarkPage = React.createClass({

  getInitialState() {
    return {
      search: '',
    }
  },

  updateSearch(event) {
    this.setState({search: event.target.value});
  },

  handleClick(e) {
    e.preventDefault();
    alert("Nut hoat dong roi ong oi");
    // printJS('docs/printjs.pdf');
  },

  render(){
    let filteredMarks = this.props.marks.filter(
      (mark) => {
        return mark.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <br/>
          <div className="row">
            <div className="col-md-4 result">
              <h4 className="text-left ">
                <span className=" fa fa-list-alt"></span> &nbsp;
                Result Internships</h4>
            </div>
            <div className="col-md-4 col-md-push-3">
              <br/>
              <input type="text" className="form-control" placeholder="Search by username..."
                     value={this.state.search}
                     onChange={this.updateSearch}/>
            </div>
          </div>
          <div className="table-wrap">
            {filteredMarks.length !== 0 ?
              <table className="table mark-table table-hover">
                <thead className="content-company">
                <tr>
                  <th className="text-left">TopicID</th>
                  <th className="text-left">Student</th>
                  <th className="text-left">Class</th>
                  <th className="text-left">CompanyRate</th>
                  <th className="text-left">Timechecking</th>
                  <th className="text-left">Report</th>
                  <th className="text-left">Demo</th>
                  <th className="text-left">Material</th>
                  <th className="text-left">GPA</th>
                  <th className="text-left">Result</th>
                </tr>
                </thead>
                <tbody>
                {filteredMarks.map((mark, i) =>
                  <tr key={i}>
                    {((sessionStorage.getItem('role') === 'teacher_manager') ||
                    (sessionStorage.getItem('role') === 'teacher_instructor')) ?
                      <td><Link to={`/mark/${mark.id}`}>{mark.id}</Link></td> :
                      <td>{mark.id}</td>
                    }
                    <td className="text-left">{mark.name}</td>
                    <td className="text-left">{mark.class}</td>
                    <td className="text-center">{mark.CSTT}</td>
                    <td className="text-center">{mark.timechecking}</td>
                    <td className="text-center">{mark.report}</td>
                    <td className="text-center">{mark.demo}</td>
                    <td className="text-center">{mark.material}</td>
                    <td className="text-center">{mark.GPA}</td>
                    <td className="text-center">{mark.Result}</td>
                  </tr>
                )}
                </tbody>
              </table> :
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="mark-search-error">Sorry, but we can't find any marks for <b>"{this.state.search}"</b></div>
                </div>
              </div>
            }
          </div>
          {/*<button type="button" onClick="printJS('docs/printjs.pdf')">Export</button>*/}
          {
            filteredMarks.length !== 0 &&
            <button type="button" className="btn btn-success btn-lg" onClick={this.handleClick}>Export</button>
          }
        </div>
      </div>
    );
  }
});

export default MarkPage;
