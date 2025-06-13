import React from 'react';

function Photo1({ item }) {
  return (
    <div className="photo1-container">
      <div className="photo-gallery">
        <img src="/architecture/arch1.jpg" alt="Architecture 1" />
        <img src="/architecture/arch2.jpg" alt="Architecture 2" />
        <img src="/architecture/arch3.jpg" alt="Architecture 3" />
      </div>
      
      <div className="photo-description">
        <p>This collection showcases architectural photography with emphasis on...</p>
        <ul>
          <li>Geometric patterns</li>
          <li>Light and shadow play</li>
          <li>Urban landscapes</li>
        </ul>
      </div>
      
      {/* You can access the item data passed from ContentArea */}
      <div className="metadata">
        <small>Project: {item.text}</small>
      </div>
    </div>
  );
}

export default Photo1;