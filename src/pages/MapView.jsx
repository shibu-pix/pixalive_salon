import React from 'react';
import City from '../components/MapView/CityFilters';
import Header from '../components/MapView/Header';
import Hero from '../components/MapView/HeroSection';
import Map from '../components/MapView/MapView';
import Card from '../components/MapView/SalonCard';
import Results from '../components/MapView/SalonResults';
import Rating from '../components/MapView/StarRating';
import { salonsData, cityCoordinates } from '../components/data/salonsData';


const Home = () => {
  return (
    <div>
    <main className="space-y-16">
    
      <City />
      <Header />
      <Hero />
      <Map />
      <Card />
      <Results />
      <Rating />
      
    </main>
    </div>
  );
};

export default Home;
