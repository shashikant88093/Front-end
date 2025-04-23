import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeMode } from './component/theme/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeMode>
    <App />
    </ThemeMode>
  </StrictMode>,
)
