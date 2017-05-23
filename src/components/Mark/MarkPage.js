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
          <h4>Result Internships</h4>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <input type="text" className="form-control" placeholder="Search by username..."
                     value={this.state.search}
                     onChange={this.updateSearch}/>
            </div>
          </div>
          <div className="table-wrap">
            {filteredMarks.length !== 0 ?
              <table className="table mark-table table-hover">
                <thead className="thead-mark">
                <tr>
                  <th className="text-center">TopicID</th>
                  <th className="text-center">Student</th>
                  <th className="text-center">Class</th>
                  <th className="text-center">CompanyRate</th>
                  <th className="text-center">Timechecking</th>
                  <th className="text-center">Report</th>
                  <th className="text-center">Demo</th>
                  <th className="text-center">Material</th>
                  <th className="text-center">GPA</th>
                  <th className="text-center">Result</th>
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
                    <td>{mark.name}</td>
                    <td>{mark.class}</td>
                    <td>{mark.CSTT}</td>
                    <td>{mark.timechecking}</td>
                    <td>{mark.report}</td>
                    <td>{mark.demo}</td>
                    <td>{mark.material}</td>
                    <td>{mark.GPA}</td>
                    <td>{mark.Result}</td>
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
