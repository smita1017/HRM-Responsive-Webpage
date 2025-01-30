import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fontsource/montserrat"; // Default font import
import "@fontsource/montserrat/400.css"; // Regular weight
import "@fontsource/montserrat/700.css"; // Bold weight
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
