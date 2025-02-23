import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import SideBar from './components/SideBar';
import Branches from './pages/branches/Branches';
import CardRequest from "./pages/card-request/CardRequest";
import CardRequestPending from "./pages/card-request/CardRequestPending";


const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
        <SideBar  isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/" element={<Home  onToggleSidebar={toggleSidebar} />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/card-request" element={<CardRequest onToggleSidebar={toggleSidebar} />} /> 
          <Route path="/card-request/card-request-pending" element={<CardRequestPending onToggleSidebar={toggleSidebar} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App