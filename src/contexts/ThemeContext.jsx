import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const darkModeColors = useMemo(
    () => ({
      mainBg: "#010122",
      navbarBg: "#161624",
      navbarTextColor: "#FFF",
      toggleColor: '#fff',
      btnBg: '#2A85FF',
      shadow: '1px 1px 5px #4c4c4c',
      overlayBg: '#00000099',
    }),
    []
  );

  const lightModeColors = useMemo(
    () => ({
      mainBg: "#eeeded",
      navbarTextColor: "#00072D",
      navbarBg: "#E3E3E3",
      toggleColor: '#000',
      btnBg: '#2A85FF',
      shadow: '1px 1px 5px #5d5d5d',
      overlayBg: 'rgba(255, 255, 255, 0.54)',
    }),
    []
  );

  const theme = isDarkMode ? darkModeColors : lightModeColors;

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
