
import React from 'react';
import './Category.css';

function Category(props) {
  const { title, chineseChar, items, activeItem, setActiveItem } = props;
  
  return (
    <div className="Category">
      <div className="CategoryTitle">
        {chineseChar && <span className="chinese-char">{chineseChar}</span>}
        {title}
      </div>
      <ul>
        {items.map((item, index) => (
          <li 
            key={index}
            className={activeItem === item.id ? "active" : ""}
            onClick={() => setActiveItem(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;