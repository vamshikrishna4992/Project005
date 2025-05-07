import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';

function Home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs/>
      <Gallery/>
      <Certificates />
      <Contact />
      <Footer/>
    </div>
  );
}

export default Home;


