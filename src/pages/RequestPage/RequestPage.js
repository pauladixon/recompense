import React from 'react';
import { Link } from 'react-router-dom'

const RequestPage = (props) => {
  return (
    <div className="service-page">
    <div className="page-header">
      <p>Requests:</p>  
      <Link className="add-service" to="/addrequest">Post A Request</Link>
    </div>
    <div className="page-content"> 
      <div className="posts">
        <p>requests</p>
      </div> 
    </div>
</div>
  );
}
export default RequestPage;