import React, { useState, useEffect, Suspense } from 'react';
import './ContentArea.css';
import Homepage from './pages/Homepage';

// Dynamic component loader
const loadComponent = (componentName) => {
  return React.lazy(() => 
    import(`./pages/${componentName}`)
      .catch(() => {
        // Return a default component inline instead of importing
        return { default: ({ item }) => (
          <div className="default-content">
            <h3>Content Coming Soon</h3>
            <p>{item.content}</p>
            <div className="placeholder">
              <p>Component "{componentName}" is under construction.</p>
            </div>
          </div>
        )};
      })
  );
};

function ContentArea({ activeItem, allItems }) {
  const [DynamicComponent, setDynamicComponent] = useState(null);
  const [hasCustomComponent, setHasCustomComponent] = useState(false);
  const selectedItem = allItems.find(item => item.id === activeItem);
  
  useEffect(() => {
    if (selectedItem) {
      // Convert item.id to component name (capitalize first letter)
      const componentName = selectedItem.id.charAt(0).toUpperCase() + selectedItem.id.slice(1);
      
      // Try to load the component
      const Component = loadComponent(componentName);
      setDynamicComponent(() => Component);
      
      // Check if we should attempt to load a custom component
      // You can maintain a list of items that have custom components
      const itemsWithCustomComponents = ['photo1', 'photo2', 'drawing1']; // Add your component IDs here
      setHasCustomComponent(itemsWithCustomComponents.includes(selectedItem.id));
    }
  }, [selectedItem]);
  
  if (!selectedItem) {
    return ( 
      <div className="ContentArea"> 
        <Homepage />
      </div>
    );
  }
  
  return (
    <div className="ContentArea">
      <h2>{selectedItem.text}</h2>
      <div className="content">
        {hasCustomComponent && DynamicComponent ? (
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicComponent item={selectedItem} />
          </Suspense>
        ) : (
          <div className="default-content">
            <p>{selectedItem.content}</p>
            <div className="placeholder">
              <p><em>Custom component coming soon...</em></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentArea;