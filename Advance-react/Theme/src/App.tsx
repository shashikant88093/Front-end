import useTheme  from "./hooks/useContext"
import './App.css'

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Set CSS variables
  document.documentElement.style.setProperty('--theme-background', theme.background);
  document.documentElement.style.setProperty('--theme-color', theme.color);
console.log(theme,"theme color")
  return (
    <div className="theme-container">
      <h1>React Theme Switcher</h1>
      <button 
        type="button" 
        className="theme-toggle-button" 
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App