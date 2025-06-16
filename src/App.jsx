// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import ReviewPage from './pages/ReviewPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<BookingPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
