import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './LandingPage.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
