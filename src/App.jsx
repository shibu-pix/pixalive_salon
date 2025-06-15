import React from 'react';
import Header from './components/Home/header';
import Footer from './components/Home/footer';
import Home from './pages/Home';
import Hair from './pages/HairSalone';
import HairProduct from './pages/HairProduct';
import Service from './pages/Service';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';

function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hair" element={<Hair/>} />
          <Route path="/hairpro" element={<HairProduct/>} />
          <Route path="/service" element={<Service/>} />      
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
