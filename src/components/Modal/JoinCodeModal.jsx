import React, { useState } from 'react';
import './Modal.css';

const JoinCodeModal = ({ onSwitchToCreate, onJoin }) => {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      onJoin(code);
    }
  };

  return (
    <div className="join-modal">
      <h2 className="modal-title">Join with code !</h2>
      
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter the code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="modal-input"
          />
        </div>
        
        <button type="submit" className="modal-btn primary">
          Join
        </button>
      </form>
      
      <p className="modal-footer">
        Didn't have a code ? 
        <button className="link-btn" onClick={onSwitchToCreate}>
          create code
        </button>
      </p>
    </div>
  );
};

export default JoinCodeModal;