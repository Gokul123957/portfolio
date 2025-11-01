import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { getTheme } from './theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

const getStoredTheme = () => {
  try {
    return localStorage.getItem('themeMode') || 'dark';
  } catch (error) {
    return 'dark';
  }
};

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem('themeMode', theme);
  } catch (error) {
    console.warn('localStorage is not available');
  }
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(getStoredTheme);

  useEffect(() => {
    setStoredTheme(mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};