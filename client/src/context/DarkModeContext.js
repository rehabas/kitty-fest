import {
  React,
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { PropTypes } from 'prop-types';

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const DarkModeProviderValue = useMemo(
    () => ({ theme, toggle }),
    [theme, toggle]
  );

  return (
    <DarkModeContext.Provider value={DarkModeProviderValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
