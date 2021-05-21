import React from 'react';
import './App.css';
import AnimalsSelectorList from './components/AnimalsSelectorList';
import AllFactsList from './components/AllFactsList'

function App() {
  return (
    <div className="App">
      <h2>Animals:</h2>
      <AnimalsSelectorList />
      <h2>All facts:</h2>
      <AllFactsList />
    </div>
  );
}

export default App;
