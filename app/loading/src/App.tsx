import './App.css'
import { useContext } from 'react'
import { UseThemeContext } from './components/theme'

function App() {
  const {theme, toggleTheme} = useContext(UseThemeContext)

  const handleDarkMode = () => {
    toggleTheme()
    console.log(theme)
    if (theme === 'dark') {
      document.body.classList.add('dark')
    }
    else {
      document.body.classList.remove('dark')
    }
  }

  

  return (
    <>
    <button onClick={handleDarkMode} type='submit'>Click</button>
       
    </>
  )
}

export default App
