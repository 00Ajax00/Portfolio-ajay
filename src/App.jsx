import { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ResumeModal from './components/ResumeModal.jsx';
import Achievements from './components/Achievements.jsx';
import Certifications from './components/Certifications.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import CubeAnimation from './components/CubeAnimation.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fadeInUp');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeModal />
      <Achievements />
      <Certifications />
      {/* <Blog /> */}
      <Contact />
      {/* <CubeAnimation /> */}
      <Footer />
      <button
        id="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
      </button>
    </div>
  );
};

export default App;