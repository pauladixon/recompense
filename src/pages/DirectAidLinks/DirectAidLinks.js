import React from 'react';
import { Link } from 'react-router-dom';

import './DirectAidLinks.css';

const DirectAidLinks = (props) => {

  return (
    <div className="page">
        <div className="page-header">
          <p >Direct Aid:</p>  
          <Link className="add-link" to="/addlink">Post A Link</Link>
        </div>
        <div className="page-content">
           
         <div className="posts">
             <p>stuff</p>
        </div> 
        </div>
      
    </div>

  );
};

export default DirectAidLinks;