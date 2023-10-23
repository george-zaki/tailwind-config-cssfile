// import React, { useState } from 'react';
// import { applyTheme } from './themeUtil';

// const ThemeSwitcher = () => {
//   const [currentTheme, setCurrentTheme] = useState('light');

//   const switchTheme = (themeName: 'light' | 'dark') => { 
//     if (themeName === currentTheme) return;

//     applyTheme(themeName);

//     setCurrentTheme(themeName);
//   };

//   return (
//     <div>
//       <h1>Dynamic Theme Switcher</h1>
//       <p>Current Theme: {currentTheme}</p>
//       <button onClick={() => switchTheme('light')}>Light Theme</button>
//       <button onClick={() => switchTheme('dark')}>Dark Theme</button>
//     </div>
//   );
// };

// export default ThemeSwitcher;


import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  //create useEffect to setCurrentTheme by default is light
  useEffect(() => {
    setCurrentTheme('light');
  }
  , []);

  const switchTheme = (themeName) => {
    if (themeName === currentTheme) return;

    const themeFileName = `${themeName}-theme.css`;

    let themeLink = document.getElementById('theme-style');
    
    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.setAttribute('rel', 'stylesheet');
      themeLink.setAttribute('id', 'theme-style'); 
      document.head.appendChild(themeLink);
    }

    themeLink.setAttribute('href', themeFileName);

    setCurrentTheme(themeName);
  };

  return (
    <div>
      <h1>Dynamic Theme Switcher</h1>
      <p>Current Theme: {currentTheme}</p>
      <button onClick={() => switchTheme('light')}>Light Theme</button>
      <button onClick={() => switchTheme('dark')}>Dark Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
