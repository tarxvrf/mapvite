import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Frame from "./Frame";
import Stokbarang from "./Dashboard/Stokbarang";
import Ringkasan from "./Dashboard/Ringkasan";
import Report from "./Dashboard/Report";
import Sales from "./Dashboard/Sales";
import User from "./Dashboard/User";

function Dashboard() {
  return (
    <Frame>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Ringkasan />} />
          <Route path="/dashboard/stokbarang" element={<Stokbarang />} />
          <Route path="/dashboard/report" element={<Report />} />
          <Route path="/dashboard/sales" element={<Sales />} />
          <Route path="/dashboard/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Frame>
  );
}

export default Dashboard;
