import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import ContentArea from './components/ContentArea';
import projectData from './components/projectData.json';

// Wrapper component for navigation
function AppContent() {
  const navigate = useNavigate();
  const { itemId } = useParams();
  
  // Create a flat array of all items for the ContentArea component
  const allItems = projectData.categories.reduce((acc, category) => {
    return [...acc, ...category.items];
  }, []);

  // Find the active item based on URL parameter
  const activeItem = itemId || null;
  
  // Function to handle item selection
  const setActiveItem = (id) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="App">
      <div className="NavBar">
        <div className="Name">Darren Yu</div>
        <div className="Occupation">Developer | Designer</div>
        
        {/* Map through categories and create a Category component for each */}
        {projectData.categories.map((category) => (
          <Category 
            key={category.id}
            title={category.title} 
            chineseChar={category.chineseChar}
            items={category.items}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}

        <footer>
          Joe MaMa
        </footer>
      </div>
      
      <ContentArea activeItem={activeItem} allItems={allItems} />
    </div>
  );
}

// Main app component with routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/item/:itemId" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;