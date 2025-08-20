import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => handleNavigation('/')}>
          <img src="/images/logo.png" alt="School Friend" className="logo-img" />
          <div className="logo-text-container">
            <span className="logo-text">SCHOOL</span>
            <span className="logo-text blue">FRIEND</span>
          </div>
        </div>
        
        <div className="header-right">
          <div className="header-icons">
            <button className="icon-btn settings">⚙️</button>
            <button className="icon-btn trophy">🏆</button>
            <button className="icon-btn notification">🔔</button>
          </div>
          
          <div className="header-buttons">
            <button 
              className={`btn btn-demo ${location.pathname === '/demo' ? 'active' : ''}`}
              onClick={() => handleNavigation('/demo')}
            >
              Demo
            </button>
            <button 
              className={`btn btn-rewards ${location.pathname === '/rewards' ? 'active' : ''}`}
              onClick={() => handleNavigation('/rewards')}
            >
              Rewards
            </button>
            <button 
              className={`btn btn-quiz ${location.pathname === '/quiz' ? 'active' : ''}`}
              onClick={() => handleNavigation('/quiz')}
            >
              Quiz
            </button>
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
            <button 
              className="btn btn-demo" 
              onClick={() => handleNavigation('/demo')}
            >
              Demo
            </button>
            <button 
              className="btn btn-rewards" 
              onClick={() => handleNavigation('/rewards')}
            >
              Rewards
            </button>
            <button 
              className="btn btn-quiz" 
              onClick={() => handleNavigation('/quiz')}
            >
              Quiz
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;