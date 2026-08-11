import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectPortfolio from './components/ProjectPortfolio';
import About from './components/About';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectPortfolio />
      <About />
      <ContactSection />
      <FloatingActions />
      <Footer />
    </div>
  );
}
