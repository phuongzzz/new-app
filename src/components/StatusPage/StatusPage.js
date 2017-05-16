import React from 'react';

const StatusPage = React.createClass({
   render(){



       return(
           <div className="row-status">
               <div className="col-md-10 col-md-offset-1">
                   <h4>Status Internship</h4>
                   <div className="table-wrap">
                       <table className="table status-table table-hover">
                           <thead className="thead-status">
                           <tr>
                               <th className="text-center">Id</th>
                               <th className="text-center">Student</th>
                               <th className="text-center">Mssv</th>
                               <th className="text-center">Status</th>
                           </tr>
                           </thead>
                           <tbody>
                           {this.props.status_internships.map((status_internship, i) =>
                               <tr key={i}>
                                   <td>{status_internship.id}</td>
                                   <td>{status_internship.name}</td>
                                   <td>{status_internship.mssv}</td>
                                   <td className="td-status">{status_internship.status}</td>
                               </tr>
                           )}
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       )
   }
});


export default StatusPage;