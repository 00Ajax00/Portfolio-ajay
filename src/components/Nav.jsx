import { useState, useEffect } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#certifications', label: 'Certifications' },
    // { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <nav aria-label="Main navigation">
      <div className="container">
        <a href="#" className="logo" aria-label="Ajay Vijayan's portfolio home">AV</a>
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="nav-links"
        >
          Menu
        </button>
        <ul id="nav-links" className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={(e) => handleSmoothScroll(e, link.href)}
                aria-label={`Go to ${link.label} section`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;