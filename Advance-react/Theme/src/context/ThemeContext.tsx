import { createContext } from 'react';

// Define the theme type
interface Theme {
  background: string;
  color: string;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const lightTheme: Theme = {
  background: '#ffffff',
  color: '#000000'
};

export const darkTheme: Theme = {
  background: '#000000',
  color: '#ffffff'
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {}
}); 