import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

function Category(props) {
  const { title, chineseChar, items, activeItem } = props;
  
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
          >
            <Link to={`/item/${item.id}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;