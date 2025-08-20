import React, { useState } from 'react';
import Header from '../Header/Header';
import './Demo.css';

const Demo = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const demoCards = [
    {
      id: 1,
      content: {
        title: "Factors & Multiples",
        subtitle: "Visual Learning",
        visual: (
          <div className="visual-content">
            <div className="cakes-demo">
              <div className="cakes-row">
                <span className="cake-icon">🍰</span>
                <span className="cake-icon">🍰</span>
                <span className="cake-icon">🍰</span>
              </div>
              <div className="cakes-row">
                <span className="cake-icon">🍰</span>
                <span className="cake-icon">🍰</span>
                <span className="cake-icon">🍰</span>
              </div>
              <p className="demo-text">6 Dosa cakes</p>
              <p className="demo-subtitle">Divided into 2 Persons</p>
            </div>
            <div className="persons-demo">
              <div className="person-card">
                <span className="person-icon">👦</span>
                <p>Person A</p>
              </div>
              <div className="person-card">
                <span className="person-icon">👧</span>
                <p>Person B</p>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 2,
      content: {
        title: "Factors & Multiples",
        subtitle: "Mathematical Concept",
        visual: (
          <div className="math-content">
            <div className="division-demo">
              <div className="math-expression">
                <span className="number">6</span>
                <span className="operator">÷</span>
                <span className="equals">=</span>
                <span className="bracket">[</span>
                <span className="list">Divisors</span>
                <span className="bracket">]</span>
              </div>
              <div className="math-breakdown">
                <p>2|6|3 → Quotient</p>
                <p className="divisor-info">(Divisor) 6</p>
                <p className="divisor-info">6</p>
                <p className="divisor-info">0</p>
              </div>
              <div className="result-buttons">
                <button className="result-btn">Divisor</button>
                <button className="result-btn">Remainder</button>
                <button className="result-btn">Quotient</button>
                <button className="result-btn">Dividend</button>
              </div>
            </div>
          </div>
        )
      }
    },
    {
      id: 3,
      content: {
        title: "Factors & Multiples",
        subtitle: "Conceptual Question",
        visual: (
          <div className="concept-content">
            <h3># Conceptual Question</h3>
            <div className="question-visual">
              <div className="visual-persons">
                <div className="person-group">
                  <span className="person-icon">👦</span>
                  <span className="person-icon">👧</span>
                  <p>Adults</p>
                </div>
                <div className="arrow">→</div>
                <div className="person-group">
                  <span className="person-icon">👨</span>
                  <span className="person-icon">👩</span>
                  <p>Person = 2</p>
                </div>
              </div>
              <p className="question-text">Dosa Cakes = 8</p>
              <p className="question-prompt">Divided into 2 cakes</p>
            </div>
            <div className="answer-grid">
              <button className="answer-btn">Remainder</button>
              <button className="answer-btn">Divisor</button>
              <button className="answer-btn">Quotient</button>
              <button className="answer-btn">Dividend</button>
            </div>
          </div>
        )
      }
    }
  ];

  const nextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % demoCards.length);
  };

  const prevCard = () => {
    setActiveCardIndex((prev) => (prev - 1 + demoCards.length) % demoCards.length);
  };

  const goToCard = (index) => {
    setActiveCardIndex(index);
  };

    return (
    <div className="demo-page">
      <Header />
      <div className="demo-main-content">
        <div className="demo-container">
          <div className="demo-carousel">
            <button className="carousel-nav prev" onClick={prevCard}>
              ‹
            </button>
            
            <div className="demo-cards-wrapper">
              <div className="demo-card-container">
                <div className="demo-card">
                  <div className="card-header">
                    <h2>{demoCards[activeCardIndex].content.title}</h2>
                    <p>{demoCards[activeCardIndex].content.subtitle}</p>
                  </div>
                  
                  <div className="card-body">
                    {demoCards[activeCardIndex].content.visual}
                  </div>
                  
                  <div className="card-navigation">
                    <button className="nav-arrow left" onClick={prevCard}>
                      ←
                    </button>
                    <button className="nav-arrow right" onClick={nextCard}>
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <button className="carousel-nav next" onClick={nextCard}>
              ›
            </button>
          </div>
          
          <div className="carousel-indicators">
            {demoCards.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeCardIndex ? 'active' : ''}`}
                onClick={() => goToCard(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;