// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Report from './Dashboard/Report';
import Ringkasan from './Dashboard/Ringkasan';
import Stokbarang from './Dashboard/Stokbarang';
import Sales from './Dashboard/Sales';
import CustomMap from './Map';

const AppRouter = () => {
 
  return (
    
    <Router>
      <Routes>  
        <Route path="/" element={<CustomMap/>} />
        <Route path="/dashboard/report" element={<Report />} />
        <Route path="/dashboard/stokbarang" element={<Stokbarang />} />
        
        <Route path="/dashboard/sales" element={<Sales />} />
        <Route path="/dashboard/" element={<Ringkasan />} />
      </Routes>
    </Router>
 
  );
};

export default AppRouter;
