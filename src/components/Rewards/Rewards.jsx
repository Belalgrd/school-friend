import React from 'react';
import Header from '../Header/Header';
import './Rewards.css';

const Rewards = () => {
  const streakDays = [
    { day: 1, completed: true },
    { day: 2, completed: true },
    { day: 3, completed: true },
    { day: 4, completed: true },
    { day: 5, completed: true },
    { day: 6, completed: true },
    { day: 7, completed: true },
    { day: 8, completed: true }
  ];

  const badges = [
    { id: 1, title: "Quick Learner", earned: true, icon: "✓" },
    { id: 2, title: "Math Explorer", earned: true, icon: "✓" },
    { id: 3, title: "Streak Master (10 Days)", earned: false, icon: "🔒" },
    { id: 4, title: "Quiz Champion (Complete 5 quizzes)", earned: false, icon: "🏆" },
    { id: 5, title: "Subject Expert (Master a topic)", earned: false, icon: "🎓" }
  ];

  return (
    <div className="rewards-page">
      <Header />
      <div className="rewards-content">
        <div className="rewards-container">
          <h1 className="rewards-title">Rewards & Achievements</h1>
          <p className="rewards-subtitle">Track your progress and unlock special mementos</p>

          {/* Learning Streak Section */}
          <section className="learning-streak-section">
            <h2 className="section-title">Your Learning Streak</h2>
            <p className="section-subtitle">Keep learning daily to maintain your streak</p>
            
            <div className="stats-cards">
              <div className="stat-card streak-card">
                <span className="stat-icon">🔥</span>
                <h3>Current Streak</h3>
                <div className="stat-value">8</div>
              </div>
              
              <div className="stat-card xp-card">
                <span className="stat-icon">🎯</span>
                <h3>Total XP</h3>
                <div className="stat-value">1250</div>
              </div>
              
              <div className="stat-card badges-card">
                <span className="stat-icon">⭐</span>
                <h3>Badges Earned</h3>
                <div className="stat-value">2</div>
              </div>
            </div>
          </section>

          {/* Digital Achievement Certificate */}
          <section className="achievement-section">
            <h2 className="section-title">Digital Achievement Memento</h2>
            <p className="section-subtitle">Congratulations! You've unlocked your achievement!</p>
            
            <div className="certificate">
              <div className="certificate-crown">👑</div>
              <h2>Certificate of Achievement</h2>
              <p className="certificate-text">This certifies that</p>
              <h3 className="certificate-name">Arjun Sharma</h3>
              <p className="certificate-from">from</p>
              <p className="certificate-school">Delhi Public School, Mumbai</p>
              <p className="certificate-achievement">Has maintained a 8-day learning streak</p>
              <p className="certificate-date">Issued on 15/08/2023</p>
            </div>
          </section>

          {/* Win Streak Section */}
          <section className="win-streak-section">
            <h2 className="streak-title">🔥 8-day win streak</h2>
            <div className="streak-days">
              {streakDays.map(({ day, completed }) => (
                <div key={day} className="streak-day-item">
                  <div className={`streak-circle ${completed ? 'completed' : ''}`}>
                    {completed ? '✓' : day}
                  </div>
                  <span className="day-label">Day {day}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Badges Section */}
          <section className="badges-section">
            <h2 className="badges-title">⭐ Badges you Earned</h2>
            <p className="badges-subtitle">Collect badges by completing various achievements</p>
            
            <div className="badges-grid">
              {badges.map(badge => (
                <div 
                  key={badge.id} 
                  className={`badge-item ${badge.earned ? 'earned' : 'locked'}`}
                >
                  <span className="badge-icon">{badge.icon}</span>
                  <span className="badge-title">{badge.title}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Rewards;