import React from 'react';
import './App.css';
import ThemeSwitcher from './ThemeSwitcher';
// import './light-theme.css'
// import './dark-theme.css'

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <h1 className='secondary'>title</h1>
    </div>
  );
}

export default App;
