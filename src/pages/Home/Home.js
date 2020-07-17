import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="home-border-1">
              <div className="home-p">
                <p><span className='page-title'>Recompense</span> :: as a verb, means to make amends for loss or harm suffered; to compensate.</p>
                <br></br>
                <p>Recompense is a community driven application for paying reparations. Users can post services to offer, make service requests, and donate to individuals in need. In the ongoing effort to redistribute resources and care, we hope this application will help further the task of connecting individuals to resources that they need, and the resources that individuals can provide to others.</p>

                <p>Included <a className="doc-link" href="http://pfw.guide/" target="_blank" rel="noopener noreferrer">here</a> is the Master List of resources compiled by Patia's Fantasy World, aimed mostly at the national, and major city level, for continuing to provide assistance outside of our site.</p>
              </div>
      </div>
    </div>
  );
}
export default Home;