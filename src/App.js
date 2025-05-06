import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import ContentArea from './components/ContentArea';
import projectData from './components/projectData.json';

function App() {
  // State to track which item is currently selected
  const [activeItem, setActiveItem] = useState(null);
  
  // Create a flat array of all items for the ContentArea component
  const allItems = projectData.categories.reduce((acc, category) => {
    return [...acc, ...category.items];
  }, []);

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

export default App;