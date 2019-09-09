import React from 'react';
import logo from './assets/starwars.png';
import './App.css';
import CharacterSearch from './components/characterSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='body'>
        <CharacterSearch />
      </div>
    </div>
  );
}

export default App;
