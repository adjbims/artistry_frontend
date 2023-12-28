import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProyekPage from "./pages/ProyekPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import JobsDetailPage from "./pages/JobsDetailPage";
import Register from "./pages/Register";
// import UserPage from "../pages/UserPage"
// import NotFound from "./pages/NotFound";
// import Welcome from "./pages/Welcome";

function App() {
  // Add the following line to declare the user state and setUser function
  const [user, setUser] = useState(null);

  const handleRegister = (email, nama) => {
    setUser({ email, nama });
  };

  const handleLogin = (nama, password) => {
    setUser({ nama, password });
    // Logic untuk handle login
    // Anda bisa menyimpan informasi user ke state atau melakukan navigasi ke halaman lain
  };

  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />}/>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/proyek" element={<ProyekPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
        <Route path="/jobs-detail" element={<JobsDetailPage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}

        {/* <Route path="*" element={<NotFound />} />
        <Route path="/welcome" element={<Welcome />} /> */}
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
