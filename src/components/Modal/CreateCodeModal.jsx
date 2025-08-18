import React, { useState } from 'react';
import './Modal.css';

const CreateCodeModal = ({ step = 1, onSwitchToJoin, onNext, onStart }) => {
  const [quizName, setQuizName] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [ownMaterial, setOwnMaterial] = useState('');

  const materialOptions = [
    'Mathematics - Class 2',
    'Science - Class 2', 
    'English - Class 2',
    'Hindi - Class 2'
  ];

  const deviceOptions = [
    'Tablet',
    'Mobile Phone',
    'Computer',
    'Smart TV'
  ];

  const ownMaterialOptions = [
    'Create New Quiz',
    'Upload Questions',
    'Use Templates',
    'Import from File'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      onNext();
    } else {
      onStart({ quizName, selectedMaterial, selectedDevice, ownMaterial });
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="modal-title">Create code !</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Write quiz name"
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                  className="modal-input"
                />
              </div>
              
              <div className="input-group">
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="modal-select"
                >
                  <option value="">Select Materials</option>
                  {materialOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <button type="submit" className="modal-btn primary">
                Create
              </button>
            </form>
          </>
        );
        
      case 2:
        return (
          <>
            <h2 className="modal-title">Create code !</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Write quiz name"
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                  className="modal-input"
                />
              </div>
              
              <div className="input-group">
                <select
                  value={selectedDevice}
                  onChange={(e) => setSelectedDevice(e.target.value)}
                  className="modal-select"
                >
                  <option value="">With Device</option>
                  {deviceOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <button type="submit" className="modal-btn primary">
                Start
              </button>
            </form>
          </>
        );
        
      case 3:
        return (
          <>
            <h2 className="modal-title">Create code !</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Write quiz name"
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                  className="modal-input"
                />
              </div>
              
              <div className="input-group">
                <select
                  value={ownMaterial}
                  onChange={(e) => setOwnMaterial(e.target.value)}
                  className="modal-select"
                >
                  <option value="">Own Materials</option>
                  {ownMaterialOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              
              <button type="submit" className="modal-btn primary">
                Start
              </button>
            </form>
          </>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="create-modal">
      {renderStepContent()}
      
      <p className="modal-footer">
        Have a code ? 
        <button className="link-btn" onClick={onSwitchToJoin}>
          Join
        </button>
      </p>
    </div>
  );
};

export default CreateCodeModal;