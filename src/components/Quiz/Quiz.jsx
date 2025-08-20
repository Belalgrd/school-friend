import React, { useState } from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import './Quiz.css';

const Quiz = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('join');

  const handleQuizAction = (action) => {
    setModalContent(action);
    setShowModal(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="quiz-page">
      <Header />
      <div className={`page-content ${showModal ? 'blurred' : ''}`}>
        <div className="quiz-container">
          <div className="quiz-hero">
            <h1 className="quiz-title">Master Any Subject!</h1>
            <p className="quiz-subtitle">
              Challenge yourself with interactive quizzes
            </p>
          </div>

          <div className="quiz-cards">
            <div className="quiz-card" onClick={() => handleQuizAction('join')}>
              <div className="card-icon">🎮</div>
              <h3>Join Quiz</h3>
              <p>Enter a code to join an existing quiz</p>
              <button className="card-btn">Join Now</button>
            </div>

            <div className="quiz-card" onClick={() => handleQuizAction('create')}>
              <div className="card-icon">✨</div>
              <h3>Create Quiz</h3>
              <p>Create your own quiz for others</p>
              <button className="card-btn">Create</button>
            </div>

            <div className="quiz-card" onClick={() => handleQuizAction('practice')}>
              <div className="card-icon">📝</div>
              <h3>Practice Mode</h3>
              <p>Practice at your own pace</p>
              <button className="card-btn">Start Practice</button>
            </div>
          </div>

                    <div className="quiz-stats">
            <div className="stat-card">
              <h4>Quizzes Completed</h4>
              <p className="stat-number">42</p>
            </div>
            <div className="stat-card">
              <h4>Average Score</h4>
              <p className="stat-number">85%</p>
            </div>
            <div className="stat-card">
              <h4>Streak</h4>
              <p className="stat-number">7 days</p>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal isOpen={showModal} onClose={closeModal}>
          {modalContent === 'join' && (
            <div className="modal-quiz-content">
              <h2>Join Quiz</h2>
              <input type="text" placeholder="Enter quiz code" className="quiz-input" />
              <button className="quiz-modal-btn">Join</button>
            </div>
          )}
          {modalContent === 'create' && (
            <div className="modal-quiz-content">
              <h2>Create Quiz</h2>
              <input type="text" placeholder="Quiz name" className="quiz-input" />
              <select className="quiz-select">
                <option>Select Subject</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
              </select>
              <button className="quiz-modal-btn">Create</button>
            </div>
          )}
          {modalContent === 'practice' && (
            <div className="modal-quiz-content">
              <h2>Practice Mode</h2>
              <p>Select a subject to start practicing</p>
              <select className="quiz-select">
                <option>Choose Subject</option>
                <option>Mathematics</option>
                <option>Science</option>
                <option>English</option>
              </select>
              <button className="quiz-modal-btn">Start</button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Quiz;