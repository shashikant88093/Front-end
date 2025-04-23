import { createContext, useState, useContext } from "react";

const Theme = createContext();

// Context provider component
export const ThemeMode = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark((prev) => !prev);
  };

  return (
    <Theme.Provider value={{ dark, toggle }}>
      {children}
    </Theme.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => {
  return useContext(Theme);
};
