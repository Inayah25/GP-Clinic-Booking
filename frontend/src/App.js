import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfileScreen from "./Inayah/ProfileScreen";
import HomePageServices from "./Inayah/HomePageServices";
import HomePage from "./yu/homepage";
import AppointmentForm from "./Inayah/AppointmentForm";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        {/* default -> services */}
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<HomePageServices />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/form" element={<AppointmentForm />} />
        {/* 404 */}
        <Route path="*" element={<div style={{ padding: 24 }}>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
