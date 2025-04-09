import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from './pages/LandingPAge';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Services from "./pages/Services"
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
