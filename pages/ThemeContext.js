import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // read initial preference (localStorage -> system preference -> default false)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("isDark");
      if (saved !== null) {
        setIsDark(saved === "true");
        return;
      }
    } catch (e) {
      // localStorage may not be available in some environments — ignore
    }

    // fallback to system preference
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);

  // apply/remove HTML class and persist to localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark-mode");
    } else {
      html.classList.remove("dark-mode");
    }
    try {
      localStorage.setItem("isDark", isDark ? "true" : "false");
    } catch (e) {}
  }, [isDark]);

  // Keep across tabs in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "isDark") {
        setIsDark(e.newValue === "true");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => setIsDark((s) => !s);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
