import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceFloor.css';

const ServiceFloor = (props) => {

  return (
    <div className="page">
        <div className="page-header">
          <p >Services:</p>  
          <Link className="add-service" to="/addservice">Post A Service</Link>
        </div>
        <div className="page-content">
           
         <div className="posts">
             <p>stuff</p>
        </div> 
        </div>
      
    </div>

  );
};

export default ServiceFloor;