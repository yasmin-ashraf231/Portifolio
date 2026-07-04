import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <div className="row align-items-center g-5">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-lg-5"
          >
            <div className="position-relative">
              <div className="glass-card p-2 rounded-4" style={{ transform: 'rotate(-3deg)' }}>
                <img 
                  src="/images/profile.png"
                  alt="Yasmin Ashraf" 
                  className="img-fluid rounded-4 w-100"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-lg-7 text-muted fs-5 line-height-lg"
          >
            <p>
              Hello! I'm an enthusiastic Front-End Developer with a passion for creating beautiful, intuitive, and highly functional web applications. My journey in web development started a few years ago, and since then, I've completely immersed myself in the modern JavaScript ecosystem.
            </p>
            <p>
              I specialize in <strong className="text-accent">React</strong> and have a deep understanding of component-driven architecture. I believe that a great UI is not just about looks, but about how smooth and natural it feels to the user.
            </p>
            <p>
              My goal is to constantly level up my skills, build products that make a difference, and eventually lead a team of talented developers to architect next-generation digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;