import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Package from './components/Package';
import Pricing from './components/Pricing';
import About from './components/About';
import FinalCall from './components/FinalCall';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Package />
        <Pricing />
        <About />
        <FinalCall />
      </main>
    </div>
  );
}

export default App;