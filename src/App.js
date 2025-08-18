import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import PathSelection from './components/PathSelection/PathSelection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PathSelection />
    </div>
  );
}

export default App;