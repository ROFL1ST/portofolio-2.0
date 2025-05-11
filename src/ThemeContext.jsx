import  { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};


// Hook untuk menggunakan ThemeContext
export default ThemeContext;
