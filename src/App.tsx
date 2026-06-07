import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Mockups from './components/Mockups';
import Process from './components/Process';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Global scroll reveal observer initialization
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#e5e5e5] overflow-hidden">
      
      {/* Custom gold pointer & ring follower */}
      <CustomCursor />
      
      {/* Sticky semi-transparent header */}
      <Navbar />
      
      {/* Content wrapper */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Clients />
        <Mockups />
        <Process />
        <Faq />
        <Contact />
      </main>

      {/* Footer block */}
      <Footer />

    </div>
  );
}

