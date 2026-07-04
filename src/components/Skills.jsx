import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container py-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="row g-4 justify-content-center"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item} className="col-6 col-md-4 col-lg-3">
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)', y: -5 }}
                className="glass-card p-4 text-center h-100 d-flex flex-column justify-content-center"
              >
                <h5 className="mb-0 fw-bold">{skill.name}</h5>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;