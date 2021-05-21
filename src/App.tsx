import React from 'react';
import './App.css';
import AnimalsSelectorList from './components/AnimalsSelectorList';
import FactsList from './components/FactsList';

function App() {
  return (
    <div className="App">
      <AnimalsSelectorList />
      <FactsList />
    </div>
  );
}

export default App;
