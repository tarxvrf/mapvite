
import { createRoot } from 'react-dom/client'
import './styles/index.css'
//import App from './App.tsx'
import 'leaflet/dist/leaflet.css';
//import Dashboard from './Dashboard.tsx';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './Approuter.tsx';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        
          
                <AppRouter />
            
    </StrictMode>
)
