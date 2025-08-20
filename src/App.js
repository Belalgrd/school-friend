import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import PathSelection from './components/PathSelection/PathSelection';
import Quiz from './components/Quiz/Quiz';
import Rewards from './components/Rewards/Rewards';
import Demo from './components/Demo/Demo';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <PathSelection />
            </>
          } />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;