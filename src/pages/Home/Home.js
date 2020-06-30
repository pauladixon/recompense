import React from 'react';
import './Home.css';

const Home = (props) => {
  return (
    <div className="Home">
      <div className="home-border-1">
        <div className="home-border-2">
          <div className="home-page">
            <div className="home-text">
              <div className="home-p">
                <p>Recompense • as a verb, means to make amends for loss or harm suffered; to compensate.</p>

                <p>Recompense is a community driven application for paying reparations. Users can post services to offer, make service requests, and donate to individuals in need. In the ongoing effort to redistribute resources and care, we hope this application will help further the task of connecting individuals to resources that they need, and the resources that individuals can provide to others.</p>

                <p>Included <a className="doc-link" href="https://docs.google.com/document/d/1z9F3SPp-Ft_9kCWLB_TE-1Nl_jSaQnkAwvFEy4HTQqs/edit" target="_blank" rel="noopener noreferrer">here</a> is a google doc library of resources we’ve compiled, aimed mostly at the national, and major city level, for continuing to provide assistance outside of our site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;