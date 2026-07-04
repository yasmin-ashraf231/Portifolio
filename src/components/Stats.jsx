import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '../data/portfolioData';

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || from === to) return;

    let start = from;
    const duration = 2000;
    const incrementTime = Math.abs(Math.floor(duration / (to - from)));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= to) {
        clearInterval(timer);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [isInView, from, to]);

  return <span ref={nodeRef}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="py-5 position-relative border-top border-bottom" style={{ borderColor: 'var(--glass-border) !important', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container py-4">
        <div className="row g-4 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-6 col-md-3"
            >
              <h2 className="display-4 fw-bold text-accent mb-2">
                <Counter from={0} to={stat.value} />+
              </h2>
              <p className="text-muted fw-semibold text-uppercase letter-spacing-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;