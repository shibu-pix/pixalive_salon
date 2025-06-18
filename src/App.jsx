import React from 'react';
import Header from './components/Home/header';
import Footer from './components/Home/footer';
import Home from './pages/Home';
import Hair from './pages/HairSalone';
import HairProduct from './pages/HairProduct';
import Service from './pages/Service';
import Product from './pages/Product';
import ExploreSalons from './pages/ExploreSalons';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/hairpro" element={<HairProduct />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/mapview" element={<ExploreSalons />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
