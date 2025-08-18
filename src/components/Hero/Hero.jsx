import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Education to be Super Addictive</h1>
        <p className="hero-subtitle">
          start with Mathematics. Soon, every subject, AI, coding, future skills — in your language.
        </p>
        <p className="hero-stats">
          78% of Indian students face challenges in Mathematics – but not anymore with School Friend.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start Learning Now</button>
          <button className="btn btn-secondary">Explore learning path</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;