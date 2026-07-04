import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const nameArray = personalInfo.name.split("");

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative">
      <div className="bg-gradient-circle" style={{ top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--accent-purple)' }} />
      <div className="bg-gradient-circle" style={{ bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--accent-blue)' }} />

      <div className="container text-center text-md-start">
        <div className="row">
          <div className="col-lg-9">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-accent fw-bold mb-2">
              Hi, my name is
            </motion.p>
            
            <h1 className="display-2 fw-bold mb-3 d-flex flex-wrap justify-content-center justify-content-md-start">
              {nameArray.map((letter, index) => (
                <motion.span key={index} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + index * 0.05 }}>
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-muted mb-4 fs-3">
              I am a <span style={{ color: 'var(--text-main)' }}>{personalInfo.title}</span> building interactive UI.
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#projects" className="btn-custom btn-primary-custom">View Projects</a>
              <a href="#contact" className="btn-custom btn-outline-custom">Contact Me</a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;