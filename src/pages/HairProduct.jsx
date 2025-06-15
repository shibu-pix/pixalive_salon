import React from 'react';
import Hero from '../components/HairProduct/prohero';
import Amenities from '../components/HairProduct/amenities';
import Service from '../components/HairProduct/service';
import ProTesti from '../components/HairProduct/protestimonials';
import About from '../components/HairProduct/about';
import OpenTym from '../components/HairProduct/opentym';
import Location from '../components/HairProduct/location';
import Venue from '../components/HairProduct/venues';
import ProFAQ from '../components/HairProduct/profaq';




const Home = () => {
  return (
    <div>
    <main className="space-y-16">
     <Hero /> 
     <Amenities />
     <Service />
     <ProTesti />
     <About />
     <OpenTym />
     <Location />
     <Venue />
     <ProFAQ />
    </main>
    </div>
  );
};

export default Home;
