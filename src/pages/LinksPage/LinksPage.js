import React from 'react';
import { Link } from 'react-router-dom'
import LinkItem from '../../components/LinkItem/LinkItem'
import './LinksPage.css'

const LinksPage = (props) => {
  return (
    <div className="service-page">
      <div className="page-header">
        <p>Links:</p>
        <Link className="add-service" to="/addlink">Post A Link</Link>
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
}
export default LinksPage;