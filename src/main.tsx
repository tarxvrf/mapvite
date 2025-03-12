import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'leaflet/dist/leaflet.css';  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen bg-gray-400 p-4'>
      <App />
    </div>
    
  </StrictMode>,
)
