import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const ContactFooter = () => {
  return (
    <footer id="contact" className="pt-5 pb-4 position-relative">
      <div className="container text-center">
        <h2 className="section-title mb-4">Let's <span className="text-accent">Connect</span></h2>
        
        <p className="text-muted mb-5 max-w-50 mx-auto">
          I'm currently looking for new opportunities. Feel free to reach out!
        </p>

        <div className="d-flex justify-content-center gap-4 mb-5">
          <motion.a whileHover={{ y: -5 }} href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted fs-2">
            <FiGithub />
          </motion.a>
          <motion.a whileHover={{ y: -5 }} href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted fs-2">
            <FiLinkedin />
          </motion.a>
          <motion.a whileHover={{ y: -5 }} href={personalInfo.facebook} target="_blank" rel="noreferrer" className="text-muted fs-2">
            <FiFacebook />
          </motion.a>
        </div>

        <div className="border-top border-secondary border-opacity-25 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
          <p className="mb-0">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn btn-sm btn-outline-secondary rounded-circle p-2 mt-2 mt-md-0">
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;