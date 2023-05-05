import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function UseTheme() {
  return useContext(ThemeContext);
}

export function UseThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}