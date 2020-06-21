import React from 'react';
import { Link } from 'react-router-dom'
import RequestItem from '../../components/RequestItem/RequestItem'
import './RequestPage.css'

const RequestPage = (props) => {
  return (
    <div className="service-page">
      <div className="page-header">
        <p>Requests:</p>
        <Link className="add-service" to="/addrequest">Post A Request</Link>
      </div>
      <div className="page-content">
        <div className="posts">
          {props.requests.map(request =>
            <RequestItem request={request} key={request._id} />
          )}
        </div>
      </div>
    </div>
  );
}
export default RequestPage;