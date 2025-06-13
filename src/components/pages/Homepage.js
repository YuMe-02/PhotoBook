import React from 'react';
import './Homepage.css';

function Homepage() {
  return (
    <div className="homepage-container">
      <h1>Select an item to view content</h1>
      <div className="homepage-image">
        <img src="/DSC06601.jpg" alt="Girl in a jacket" width="500" height="600" />
      </div>
      <div className="homepage-intro">
        <p>Welcome to my portfolio. Browse through my work using the navigation on the left.</p>
      </div>
    </div>
  );
}

export default Homepage;