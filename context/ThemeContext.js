import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // load saved theme (optional)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("isDark");
      if (saved !== null) setIsDark(saved === "true");
    } catch (_) {}
  }, []);

  // apply & persist
  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark-mode", isDark);
      localStorage.setItem("isDark", String(isDark));
    } catch (_) {}
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
