import React from 'react';
import Header from './components/Header';
import ProfessionalSelection from './components/ProfessionalSelection';
import DateTimeSelection from './components/DateTimeSelection';
import BookingSummary from './components/BookingSummary';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Professional and Date/Time Selection */}
          <div className="lg:col-span-2 space-y-8">
            <ProfessionalSelection />
            <DateTimeSelection />
          </div>
          
          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <BookingSummary />
          </div>
        </div>
      </main>

      <TrustIndicators />
      <Footer />
    </div>
  );
}

export default App;