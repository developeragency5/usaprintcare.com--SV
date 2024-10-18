import React from 'react';
import PreNavBar from '../Components/PreNavBar';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/Services'; 
import Faq from '../Components/FAQ'; 
import Testimonial from '../Components/Testimonial';
import Support from '../Components/Support';
import Footer from '../Components/Footer'
import Brands from '../Components/Brands';

const Home = () => {
  return (
    <div>
      <PreNavBar/>
      <Navbar />
      <Hero />
      {/* <Brands/> */}
      <Services />
      <Support/>
      <Faq />
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default Home;
