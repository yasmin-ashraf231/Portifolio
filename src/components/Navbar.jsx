import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-current" href="#home" style={{ color: 'var(--text-main)' }}>
          Yasmin<span className="text-accent">.</span>
        </a>
        
        <div className="d-flex align-items-center gap-2 d-lg-none ms-auto me-2">
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        <button className="navbar-toggler border-0 shadow-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={26} color="var(--text-main)" /> : <HiMenuAlt3 size={26} color="var(--text-main)" />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link}>
                <a 
                  className="nav-link fw-semibold" 
                  style={{ color: 'var(--text-main)', opacity: 0.8 }}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="nav-item d-none d-lg-block">
              <button onClick={toggleTheme} className="theme-toggle-btn">
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;