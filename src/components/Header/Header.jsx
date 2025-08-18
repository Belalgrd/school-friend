import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="School Friend" className="logo-img" />
          <div className="logo-text-container">
          </div>
        </div>
        
        <div className="header-right">
          <div className="header-icons">
            <button className="icon-btn settings">⚙️</button>
            <button className="icon-btn trophy">🏆</button>
            <button className="icon-btn notification">🔔</button>
          </div>
          
          <div className="header-buttons">
            <button className="btn btn-demo">Demo</button>
            <button className="btn btn-rewards">Rewards</button>
            <button className="btn btn-quiz">Quiz</button>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <button className="btn btn-demo">Demo</button>
            <button className="btn btn-rewards">Rewards</button>
            <button className="btn btn-quiz">Quiz</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;