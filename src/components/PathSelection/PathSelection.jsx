import React, { useState } from 'react';
import ClassCarousel from '../ClassCarousel/ClassCarousel';
import Dropdown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';
import JoinCodeModal from '../Modal/JoinCodeModal';
import CreateCodeModal from '../Modal/CreateCodeModal';
import './PathSelection.css';

const PathSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('join'); // 'join' or 'create'
  const [createStep, setCreateStep] = useState(1);

  const subjectOptions = [
    'Mathematics',
    'Science',
    'English',
    'Hindi',
    'Social Studies'
  ];

  const boardOptions = [
    'CBSE',
    'ICSE',
    'State Board',
    'IGCSE'
  ];

  const handleLetsLearnClick = () => {
    setIsModalOpen(true);
    setModalType('join');
    setCreateStep(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType('join');
    setCreateStep(1);
  };

  const handleSwitchToCreate = () => {
    setModalType('create');
    setCreateStep(1);
  };

  const handleSwitchToJoin = () => {
    setModalType('join');
  };

  const handleJoin = (code) => {
    console.log('Joining with code:', code);
    // Handle join logic here
    handleCloseModal();
  };

  const handleCreateNext = () => {
    // Simulate different create steps
    const nextStep = createStep < 3 ? createStep + 1 : 1;
    setCreateStep(nextStep);
  };

  const handleStart = (data) => {
    console.log('Starting with data:', data);
    // Handle start logic here
    handleCloseModal();
  };

  return (
    <section className="path-selection">
      <div className="path-container">
        <h2 className="path-title">Choose Your Path</h2>
        <p className="path-subtitle">Select class, subject and board to begin</p>
        
        <div className="selection-section">
          <h3 className="section-title">Select Class</h3>
          <ClassCarousel />
        </div>

        <div className="selection-section">
          <h3 className="section-title">Select Subject</h3>
          <Dropdown 
            options={subjectOptions}
            placeholder="Select"
          />
        </div>

        <div className="selection-section">
          <h3 className="section-title">Select Board</h3>
          <Dropdown 
            options={boardOptions}
            placeholder="Select"
          />
        </div>

        <button className="btn btn-learn" onClick={handleLetsLearnClick}>
          Let's Learn
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalType === 'join' ? (
          <JoinCodeModal 
            onSwitchToCreate={handleSwitchToCreate}
            onJoin={handleJoin}
          />
        ) : (
          <CreateCodeModal 
            step={createStep}
            onSwitchToJoin={handleSwitchToJoin}
            onNext={handleCreateNext}
            onStart={handleStart}
          />
        )}
      </Modal>
    </section>
  );
};

export default PathSelection;