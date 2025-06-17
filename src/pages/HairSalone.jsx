import React from 'react';
import Hero from '../components/HairSalon/hero';
import Global from '../components/HairSalon/global';
import Review from '../components/HairSalon/review';
import HairFAQ from '../components/HairSalon/hairfaq';


const Home = () => {
  return (
    <div>
    <main className="space-y-16">
     <Hero /> 
     <Global />
     <Review />
     <HairFAQ />
    </main>
    </div>
  );
};

export default Home;
