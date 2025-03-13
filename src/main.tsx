import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './styles/index.css'
//import App from './App.tsx'
import 'leaflet/dist/leaflet.css';
//import Dashboard from './Dashboard.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import AppRouter from './Approuter.tsx';
import CustomMap from './Map.tsx';
import Home from './Home.tsx';

createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={new QueryClient}>
         <Router>
      <Routes>  
        <Route path="/" element={<CustomMap/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
    </QueryClientProvider>

)
