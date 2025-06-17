import React from 'react';
import Booking from '../components/Product/BookingPage';
import Review from '../components/Product/ReviewPage';



const Home = () => {
  return (
    <div>
    <main className="space-y-16">
    
      <Booking />
      <Review />
      
    </main>
    </div>
  );
};

export default Home;
