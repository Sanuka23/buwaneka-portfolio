import { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const isScrollingToSection = useRef(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      isScrollingToSection.current = true;
      setActiveSection(sectionId);
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Reset the flag after scrolling is complete
      setTimeout(() => {
        isScrollingToSection.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section if we're programmatically scrolling
      if (isScrollingToSection.current) return;

      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call handleScroll initially to set correct active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
