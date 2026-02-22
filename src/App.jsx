import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Differentiators from './components/Differentiators';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const PortfolioConversion = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contact');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', position: 'relative', transition: 'background 0.4s ease' }}>
      {/* Ambient background orbs */}
      <div className="bg-orb bg-orb-1" aria-hidden="true" />
      <div className="bg-orb bg-orb-2" aria-hidden="true" />

      {/* Page content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
          scrollToContact={scrollToContact}
        />
        <Hero darkMode={darkMode} scrollToContact={scrollToContact} scrollToSection={scrollToSection} />
        <Differentiators darkMode={darkMode} scrollToSection={scrollToSection} />
        <Skills />
        <Projects darkMode={darkMode} />
        <Process darkMode={darkMode} scrollToContact={scrollToContact} />
        <Testimonials darkMode={darkMode} />
        <FAQ darkMode={darkMode} scrollToContact={scrollToContact} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} scrollToSection={scrollToSection} scrollToContact={scrollToContact} />
      </div>
    </div>
  );
};

export default PortfolioConversion;
