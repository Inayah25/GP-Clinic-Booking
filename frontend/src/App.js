import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import ProfileScreen from "./Inayah/ProfileScreen";
import HomePageServices from "./Inayah/HomePageServices";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        {/* default -> services */}
        <Route path="/" element={<Navigate to="/services" replace />} />
        <Route path="/services" element={<HomePageServices />} />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* 404 */}
        <Route path="*" element={<div style={{ padding: 24 }}>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
