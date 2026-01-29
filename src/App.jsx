import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReferralBanner from './components/ReferralBanner';

import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReferralBanner />

        <Features />
        <AboutUs />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
