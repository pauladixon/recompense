import React from 'react';
import { Link } from 'react-router-dom';
import LinkItem from '../../components/LinkItem/LinkItem'
import './LinksPage.css';

const LinksPage = (props) => {

  return (
    <div className="page">
      <div className="page-header">
        <p className='page-title'>Direct Aid:</p>
        <Link className="add-link" to="/addlink">Post A Link</Link>
        {/* <Link className="add-link" to="/linkdetail">Link Detail</Link> */}
      </div>
      <div className="page-content">
        <div className="posts">
          {props.links.map(link =>
            <LinkItem link={link} key={link._id} />
          )}
        </div>
      </div>

    </div>

  );
};

export default LinksPage;