import React, { useState } from 'react';
import './ClassCarousel.css';

const ClassCarousel = () => {
  const [currentClass, setCurrentClass] = useState(2);
    // Assuming classes are numbered from 1 to 10

  const nextClass = () => {
    setCurrentClass(prev => prev < 10 ? prev + 1 : 1);
  };

  const prevClass = () => {
    setCurrentClass(prev => prev > 1 ? prev - 1 : 10);
  };

  return (
    <div className="class-carousel">
      <button className="carousel-btn prev" onClick={prevClass}>
        ‹
      </button>
      
      <div className="class-cards">
        <div className="class-card side-card left">
          <span className="class-text">Class</span>
          <span className="class-number">{currentClass > 1 ? currentClass - 1 : 10}</span>
        </div>
        
        <div className="class-card main-card">
          <span className="class-text">Class</span>
          <span className="class-number">{currentClass}</span>
        </div>
        
        <div className="class-card side-card right">
          <span className="class-text">Class</span>
          <span className="class-number">{currentClass < 10 ? currentClass + 1 : 1}</span>
        </div>
      </div>
      
      <button className="carousel-btn next" onClick={nextClass}>
        ›
      </button>
      
      <div className="carousel-dots">
        {[0, 1, 2].map(index => (
          <span 
            key={index} 
            className={`dot ${index === 1 ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ClassCarousel;