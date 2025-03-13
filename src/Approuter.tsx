// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Report from './Dashboard/Report';
//import Ringkasan from './Dashboard/Ringkasan';
//import Stokbarang from './Dashboard/Stokbarang';
//import Sales from './Dashboard/Sales';
import CustomMap from './Map';
import Home from './Home';

const AppRouter = () => {
 
  return (    
    <Router>
      <Routes>  
        <Route path="/" element={<CustomMap/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
 
  );
};

export default AppRouter;
