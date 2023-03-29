import './App.css';
import React from 'react';
import {Navbar} from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Support from './Components/Support';
import Allinone from './Components/AllInOne';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Allinone />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
