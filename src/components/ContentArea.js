import React from 'react';
import './ContentArea.css';

function ContentArea({ activeItem, allItems }) {
  // Find the selected item from all items
  const selectedItem = allItems.find(item => item.id === activeItem);
  
  if (!selectedItem) {
    return <div className="ContentArea">Select an item to view content</div>;
  }
  
  return (
    <div className="ContentArea">
      <h2>{selectedItem.text}</h2>
      <div className="content">{selectedItem.content}</div>
    </div>
  );
}

export default ContentArea;