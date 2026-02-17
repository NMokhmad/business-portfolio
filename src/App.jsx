import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Differentiators from './components/Differentiators';
import Problems from './components/Problems';
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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-black via-gray-900 to-black text-white' : 'bg-gray-50 text-gray-900'}`}>
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
      <Problems darkMode={darkMode} scrollToContact={scrollToContact} />
      <Projects darkMode={darkMode} />
      <Process darkMode={darkMode} scrollToContact={scrollToContact} />
      <Testimonials darkMode={darkMode} />
      <FAQ darkMode={darkMode} scrollToContact={scrollToContact} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} scrollToSection={scrollToSection} scrollToContact={scrollToContact} />
    </div>
  );
};

export default PortfolioConversion;
