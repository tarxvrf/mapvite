import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import 'leaflet/dist/leaflet.css';  
import Dashboard from './Dashboard.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient}>
    <div className='min-h-screen bg-black p-4'>
      <Dashboard/>
    </div>   
     </QueryClientProvider>
  </StrictMode>,
)
