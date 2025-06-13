import React from 'react';
import Header from '../components/Home/header';
import Categories from '../components/Home/categories';
import Recent from '../components/Home/recent';
import Recommended from '../components/Home/recomand';
import Rated from '../components/Home/rated';
import Franchies from '../components/Home/franchies';
import DownloadApp from '../components/Home/download';
import Testimonials from '../components/Home/testimonials';
import FAQ from '../components/Home/faq';
import Footer from '../components/Home/footer';


const Home = () => {
  return (
    <div>
    <main className="space-y-16">
      <Header />
      <Categories />
      <Recent />
      <Recommended />
      <Rated />
      <Franchies />
      <DownloadApp />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
    </div>
  );
};

export default Home;
