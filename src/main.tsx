
import { createRoot } from 'react-dom/client'
import './styles/index.css'
//import App from './App.tsx'
import 'leaflet/dist/leaflet.css';  
//import Dashboard from './Dashboard.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './Approuter.tsx';

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={new QueryClient}>
    <div className='min-h-screen bg-black p-4'>
     <AppRouter/>
    </div>   
     </QueryClientProvider>

)
