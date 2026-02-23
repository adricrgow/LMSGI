import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Este componete viene de la exportación del App.tsx 
    Todo el html que devuelver el app se sustituye en  la etiqueta <App />
    */}
    <App />
  </StrictMode>,
)
