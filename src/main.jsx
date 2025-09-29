import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/modern-normalize.css'
import './styles/index.css'
import './styles/utils.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
